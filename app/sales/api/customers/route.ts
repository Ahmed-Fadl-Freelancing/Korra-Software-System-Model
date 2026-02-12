import { NextRequest, NextResponse } from 'next/server';

// Sales Department API - Get customers
export async function GET(request: NextRequest) {
  try {
    // This is a placeholder - in real implementation, you would fetch from Supabase
    // const { data, error } = await supabase.from('customers').select('*');
    
    // For now, return sample data
    const customers = [
      { id: 1, name: 'ABC Corporation', email: 'contact@abc.com', status: 'active' },
      { id: 2, name: 'XYZ Industries', email: 'info@xyz.com', status: 'active' },
    ];

    return NextResponse.json({ customers }, { status: 200 });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}

// Sales Department API - Create customer
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // This is a placeholder - in real implementation, you would insert into Supabase
    // const { data, error } = await supabase.from('customers').insert([
    //   { name, email, phone, company }
    // ]);

    return NextResponse.json(
      {
        message: 'Customer created successfully',
        customer: { name, email, phone, company },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json(
      { error: 'Failed to create customer' },
      { status: 500 }
    );
  }
}
