import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-white">
              <Building2 className="h-6 w-6 text-accent" />
              <span>집라이프</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              경매전문 인테리어.<br />
              부동산 경매 컨설팅부터 낙찰 후 인테리어까지 원스톱으로 해결해드립니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-white">서비스</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-accent transition-colors">권리 분석 및 입찰 대행</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">명도 및 점유 이전</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">주거 공간 리모델링</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">부분 수리 및 보수</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-white">문의하기</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span>010-1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span>contact@zip-life.kr</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>서울시 강남구 테헤란로 123</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} 집라이프. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
