import { NextRequest, NextResponse } from 'next/server';

// Shared API - Get coordination data between departments
// This represents where the two departments "meet"
export async function GET(request: NextRequest) {
  try {
    // Example: Get data that's relevant to both departments
    // Like projects that are associated with sales orders
    const coordinationData = {
      salesProjects: [
        {
          orderId: 'ORD-001',
          projectId: 'PROJ-001',
          customerName: 'ABC Corporation',
          projectName: 'Building Automation System',
          status: 'linked',
        },
      ],
    };

    return NextResponse.json(coordinationData, { status: 200 });
  } catch (error) {
    console.error('Error fetching coordination data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch coordination data' },
      { status: 500 }
    );
  }
}
