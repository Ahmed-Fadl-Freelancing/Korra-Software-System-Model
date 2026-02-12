import { NextRequest, NextResponse } from 'next/server';

// Technical Office API - Get projects
export async function GET(request: NextRequest) {
  try {
    // This is a placeholder - in real implementation, you would fetch from Supabase
    // const { data, error } = await supabase.from('projects').select('*');
    
    // For now, return sample data
    const projects = [
      { id: 1, name: 'Building Automation System', status: 'in_progress', progress: 65 },
      { id: 2, name: 'Factory Layout Design', status: 'planning', progress: 20 },
    ];

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// Technical Office API - Create project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, startDate, deadline } = body;

    if (!name || !description) {
      return NextResponse.json(
        { error: 'Name and description are required' },
        { status: 400 }
      );
    }

    // This is a placeholder - in real implementation, you would insert into Supabase
    // const { data, error } = await supabase.from('projects').insert([
    //   { name, description, start_date: startDate, deadline }
    // ]);

    return NextResponse.json(
      {
        message: 'Project created successfully',
        project: { name, description, startDate, deadline },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
