import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    // 구글 서비스 계정 인증
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || ""),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 스프레드 시트 ID (실제 ID로 교체 필요)
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // 데이터를 추가할 범위 (Sheet1의 A:C 열 사용 예시)
    const range = "Sheet1!A:C";

    // 폼 데이터 추가
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, subject, message]],
      },
    });

    return NextResponse.json(
      { message: "폼이 성공적으로 제출되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("폼 제출 오류:", error);
    return NextResponse.json(
      { message: "폼 제출 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
