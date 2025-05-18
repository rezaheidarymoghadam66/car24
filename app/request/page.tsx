import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RequestPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-amber-100 py-2 px-4 flex justify-between items-center">
        <h2 className="text-right font-medium">به دل جـــاده بزن ما همراهت داریم!</h2>
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1 text-sm">
            <span>بازگشت به صفحه اصلی</span>
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

      {/* Request Form */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-right">درخواست امداد خودرو</h1>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-right">
                  <Label htmlFor="name">نام و نام خانوادگی</Label>
                  <Input id="name" placeholder="نام و نام خانوادگی خود را وارد کنید" />
                </div>

                <div className="space-y-2 text-right">
                  <Label htmlFor="phone">شماره موبایل</Label>
                  <Input id="phone" placeholder="شماره موبایل خود را وارد کنید" dir="ltr" />
                </div>
              </div>

              <div className="space-y-2 text-right">
                <Label htmlFor="car-model">مدل خودرو</Label>
                <Input id="car-model" placeholder="مدل خودرو خود را وارد کنید" />
              </div>

              <div className="space-y-2 text-right">
                <Label>نوع خدمات مورد نیاز</Label>
                <RadioGroup defaultValue="battery" className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="battery" id="battery" />
                    <Label htmlFor="battery">امداد باتری</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="fuel" id="fuel" />
                    <Label htmlFor="fuel">امداد سوخت</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="tire" id="tire" />
                    <Label htmlFor="tire">امداد پنچرگیری</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">سایر خدمات</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2 text-right">
                <Label htmlFor="location">آدرس دقیق</Label>
                <Textarea id="location" placeholder="آدرس دقیق خود را وارد کنید" rows={3} />
              </div>

              <div className="space-y-2 text-right">
                <Label htmlFor="description">توضیحات</Label>
                <Textarea id="description" placeholder="توضیحات بیشتر در مورد مشکل خودرو" rows={4} />
              </div>

              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                ثبت درخواست
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">یا با شماره تلفن زیر تماس بگیرید</p>
                <Link
                  href="tel:+989120591950"
                  className="inline-flex items-center gap-2 mt-2 text-blue-700 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">+98-9120591950</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
