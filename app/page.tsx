import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-amber-100 py-2 px-4 flex justify-between items-center">
        <h2 className="text-right font-medium">به دل جـــاده بزن ما همراهت داریم!</h2>
        <div className="flex items-center gap-2">
          <Link href="/request" className="flex items-center gap-1 text-sm">
            <span>درخواست تلفنی امداد خودرو</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
          <Link
            href="tel:+989120591950"
            className="flex items-center gap-1 bg-blue-700 text-white px-3 py-1 rounded-md"
          >
            <Phone className="w-4 h-4" />
            <span dir="ltr">+98-9120591950</span>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/login" className="border rounded-md px-4 py-2 text-sm">
              ورود / ثبت‌نام
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/team" className="text-sm font-medium">
              تیم‌مان امدادگر
            </Link>
            <Link href="/about" className="text-sm font-medium">
              درباره ما
            </Link>
            <Link href="/faq" className="text-sm font-medium">
              دانستنی‌ها
            </Link>
            <Link href="/pricing" className="text-sm font-medium">
              تعرفه
            </Link>
            <div className="relative group">
              <Link href="/services" className="text-sm font-medium flex items-center gap-1">
                خدمات
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
            </div>
            <Link href="/" className="text-sm font-medium">
              خانه
            </Link>
          </nav>

          <Link href="/" className="text-blue-700 text-2xl font-bold">
            m.CAR
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-blue-100 h-48">
        <Image
          src="/placeholder.svg?height=400&width=1500"
          alt="Car assistance background"
          width={1500}
          height={400}
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-end">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 text-sm">
              <span>امداد خودرو</span>
              <span>←</span>
              <Link href="/" className="text-sm">
                خانه
              </Link>
            </div>
            <h1 className="text-3xl font-bold mt-4">امداد خودرو</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-right">
            <p className="leading-7 mb-8">
              امداد خودرو تهران به صورت شبانه روزی و سیار در امدادگار شامل خدمات: امداد باتری، امداد سوخت و امداد
              پنچرگیری می باشد که هر یک از خدمات توسط کارشناسان امدادگار به صورت ۲۴ ساعته شبانه روز انجام می شود. شرکت
              امدادکار با هدف ارائه خدمات بهتر و سریع تر به هم وطنان عزیز کشورمان نسبت به هر کدام از خدمات درخواست شده
              در امداد فوری خودرو کارشناسان مجرب و با سابقه مرتبط به همان درخواست را ارسال می نماید تا در وقت و هزینه
              شما صرفه جویی شود.
            </p>

            {/* Consultation Box */}
            <div className="bg-blue-50 rounded-lg p-8 my-12 text-center">
              <h2 className="text-blue-700 text-2xl font-bold mb-4">مشاوره رایگان با کارشناسان فنی</h2>
              <p className="mb-6">جهت مشاوره فنی خودروی خود با کارشناسان فنی امدادگر در ارتباط باشید!</p>
              <Link
                href="tel:+989120591950"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-md font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">+98-9125801946</span>
                <span>تماس با ما</span>
              </Link>
            </div>

            {/* Battery Assistance Section */}
            <h2 className="text-2xl font-bold mb-6">امداد باتری</h2>
            <p className="leading-7">
              کارشناسان امدادگار آماده اند تا در ارائه خدمات باتری ساز، تعمیر یا تعویض باتری به شهروندان عزیزمان در
              تهران خدمت رسانی کنند. تماس باتری های ارائه شده توسط کارشناسان امدادگر از بهترین و با کیفیت ترین باتری های
              داخلی و خارجی می باشد. شما می توانید در هر ساعت از شبانه روز درخواست امداد باتری خود را با روش های ثبت در
              وبسایت، اپلیکیشن و یا ارتباط با ما ارسال نمایید.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
