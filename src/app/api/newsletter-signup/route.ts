import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || '2');
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';

export async function POST(request: NextRequest) {
  console.log('🔵 Newsletter signup API called');
  console.log('🌍 Environment check:');
  console.log('  - BREVO_API_KEY present:', !!process.env.BREVO_API_KEY);
  console.log('  - BREVO_LIST_ID:', process.env.BREVO_LIST_ID);
  
  try {
    // Validate request content type
    const contentType = request.headers.get('content-type');
    console.log('📋 Content-Type:', contentType);
    
    if (!contentType || !contentType.includes('application/json')) {
      console.log('❌ Invalid content type');
      return NextResponse.json({ error: 'Content-Type must be application/json' }, { status: 400 });
    }

    const requestBody = await request.json();
    console.log('📝 Request body:', requestBody);
    
    const { email, firstName, lastName } = requestBody;

    if (!email) {
      console.log('❌ No email provided');
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!BREVO_API_KEY) {
      console.error('❌ Brevo API key not configured');
      return NextResponse.json({ error: 'Newsletter service not configured' }, { status: 500 });
    }

    console.log('🔑 Using API key:', BREVO_API_KEY ? 'Present' : 'Missing');
    console.log('📋 Using list ID:', BREVO_LIST_ID);
    
    const brevoPayload = {
      email: email,
      attributes: {
        FIRSTNAME: firstName || '',
        LASTNAME: lastName || '',
      },
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    };
    
    console.log('📤 Sending to Brevo:', brevoPayload);

    // Create contact in Brevo
    const brevoResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(brevoPayload),
    });

    console.log('📊 Brevo response status:', brevoResponse.status);
    
    let brevoData = null;
    
    // Handle 204 No Content response (successful but no body)
    if (brevoResponse.status === 204) {
      console.log('✅ Successfully added/updated contact (204 No Content)');
      return NextResponse.json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      });
    }
    
    // For other responses, parse the JSON
    try {
      brevoData = await brevoResponse.json();
      console.log('📥 Brevo response data:', brevoData);
    } catch (parseError) {
      console.error('❌ Failed to parse Brevo response:', parseError);
      if (brevoResponse.ok) {
        // If response was successful but no JSON, treat as success
        return NextResponse.json({ 
          success: true, 
          message: 'Successfully subscribed to newsletter!' 
        });
      }
    }

    if (brevoResponse.ok) {
      console.log('✅ Successfully added/updated contact');
      return NextResponse.json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      });
    } else if (brevoResponse.status === 400 && brevoData?.code === 'duplicate_parameter') {
      console.log('ℹ️ Contact already exists');
      return NextResponse.json({ 
        success: true, 
        message: 'You are already subscribed to our newsletter!' 
      });
    } else {
      console.error('❌ Brevo API error:', brevoData);
      return NextResponse.json({ 
        error: 'Failed to subscribe. Please try again later.' 
      }, { status: 500 });
    }

  } catch (error) {
    console.error('💥 Newsletter signup error:', error);
    console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json({ 
      error: 'Internal server error. Please try again later.' 
    }, { status: 500 });
  }
}
