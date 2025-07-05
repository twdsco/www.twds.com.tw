export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="my-8 text-center opacity-50 text-sm">
      {currentYear} | 台灣數位串流有限公司 | 統編：83569021 |{" "}
      <a
        href="mailto:contact@twds.tw"
        className="text-blue-500 hover:underline"
      >
        contact@twds.tw
      </a>
    </div>
  );
}
