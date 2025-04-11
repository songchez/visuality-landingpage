import React from "react";

interface AlertProps {
  type: "success" | "error"; // 성공 또는 실패
  message: string; // 표시할 메시지
  onClose: () => void; // 닫기 함수
}

export default function Alert({ type, message, onClose }: AlertProps) {
  const isSuccess = type === "success";

  return (
    <div
      role="alert"
      className={`animate-drop-in fixed top-10 z-10 rounded-md border ${
        isSuccess ? "border-green-600" : "border-red-600"
      } bg-gray-800 p-4 shadow-sm`}
    >
      <div className="flex items-start gap-4">
        {isSuccess ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-red-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        )}

        <div className="flex-1">
          <strong className={`font-medium text-white`}>
            {isSuccess ? "제출 완료" : "제출 실패"}
          </strong>
          <p className="mt-0.5 text-sm text-gray-200">{message}</p>
        </div>

        <button
          className="-m-3 rounded-full p-1.5 text-gray-100 transition-colors hover:bg-gray-50 hover:text-gray-700"
          type="button"
          aria-label="Dismiss alert"
          onClick={onClose}
        >
          <span className="sr-only">Dismiss popup</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
