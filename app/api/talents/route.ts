export async function GET() {
  const talents = [
    {
      name: 'Abhishek Gupta',
      role: '마케팅',
      yoe: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      name: 'John Doe',
      role: '마케팅',
      yoe: '10y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      name: 'Peter Parker',
      role: '마케팅',
      yoe: '6y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
  ];

  return Response.json(talents);
}
