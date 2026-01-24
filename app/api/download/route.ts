import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://oaisis.co.uk/appcast.xml', {
      cache: 'no-store'
    });
    
    const xmlText = await response.text();
    const urlMatch = xmlText.match(/url="([^"]+)"/);
    
    if (urlMatch && urlMatch[1]) {
      return NextResponse.redirect(urlMatch[1]);
    }
  } catch (error) {
    console.error('Failed to fetch appcast:', error);
  }
  
  return NextResponse.redirect('https://github.com/aurelien971/oaisiswebsite/releases/download/v1.05/Oasis.dmg');
}
