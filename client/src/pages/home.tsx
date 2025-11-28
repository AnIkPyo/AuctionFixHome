import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Gavel, Hammer, Home as HomeIcon, Key, Phone, MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Image Imports
import heroImage from "@assets/generated_images/modern_interior_with_blueprints.png";
import auctionImage from "@assets/generated_images/real_estate_auction_concept.png";
import renovationImage from "@assets/generated_images/home_renovation_concept.png";
import profileImage from "@assets/expert_profile.jpeg";

const contactSchema = z.object({
  name: z.string().min(2, "이름을 입력해주세요."),
  phone: z.string().min(10, "연락처를 입력해주세요."),
  message: z.string().min(10, "문의 내용을 자세히 적어주세요."),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    toast({
      title: "문의가 접수되었습니다.",
      description: "빠른 시일 내에 연락드리겠습니다.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" /> {/* Dark overlay */}
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              <span className="text-accent">경매전문</span> 인테리어<br />
              <span className="text-accent">집라이프</span>입니다.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              복잡한 경매 권리분석부터 낙찰 후 인테리어까지.<br className="hidden md:block" />
              경매 물건의 가치를 높이는 최고의 파트너가 되어드리겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-lg px-8 h-14 bg-accent hover:bg-accent/90 text-slate-900 font-semibold" asChild>
                <a href="#contact">무료 상담 신청</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 bg-transparent text-white border-white hover:bg-white/10 hover:text-white" asChild>
                <a href="#services">서비스 더보기</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">왜 집라이프인가요?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">경매 컨설팅 따로, 인테리어 업체 따로... 번거로우셨죠? <br />이제 집라이프에서 모든 것을 해결하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Gavel,
                title: "정확한 권리 분석",
                desc: "수년간의 경매 실무 경험으로 안전하고 수익성 높은 물건만을 엄선하여 추천해 드립니다."
              },
              {
                icon: Hammer,
                title: "투명한 시공",
                desc: "거품 없는 견적과 투명한 자재 사용으로 낙찰 받은 집의 가치를 최대로 끌어올립니다."
              },
              {
                icon: Key,
                title: "원스톱 서비스",
                desc: "물건 검색부터 입찰, 명도, 수리, 입주까지. 모든 과정을 책임지고 관리해 드립니다."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-accent font-bold tracking-wider uppercase mb-2">Service 01</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">부동산 경매 컨설팅</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "고객 맞춤형 물건 검색 및 수익률 분석",
                  "현장 답사 및 정확한 시세 조사",
                  "법적 리스크 없는 완벽한 권리 분석",
                  "합리적인 입찰가 산정 및 입찰 대행",
                  "신속하고 원만한 명도(이사) 처리"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-slate-900 hover:bg-slate-800">
                자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl group"
            >
              <img src={auctionImage} alt="Auction" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group"
            >
              <img src={renovationImage} alt="Renovation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-accent font-bold tracking-wider uppercase mb-2">Service 02</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">낙찰 후 집수리 & 인테리어</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "임대/매매 목적에 맞는 가성비 인테리어",
                  "노후 주택 누수, 단열, 배관 설비 공사",
                  "도배, 장판, 욕실, 싱크대 부분 리모델링",
                  "하자 보수 및 시설물 유지 관리",
                  "공사 완료 후 임대 맞춤 및 매매 연결 지원"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-slate-900 hover:bg-slate-800">
                자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Expert */}
      <section id="about" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg">
                <img src={profileImage} alt="Expert Profile" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                "고객님의 자산을 내 것처럼 소중하게."
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                안녕하세요. 집라이프 대표입니다. <br />
                수많은 경매 현장과 공사 현장을 누비며 쌓은 노하우로,
                고객님께 가장 안전하고 확실한 부동산 투자의 길을 안내해 드립니다.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                단순히 낙찰만 받고 끝나는 것이 아닙니다.
                낙찰 후 명도와 수리까지 완벽하게 마무리되어야 진정한 투자의 완성입니다.
                복잡하고 어려운 과정은 제가 맡겠습니다. 고객님은 결과만 확인하세요.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-3xl font-bold text-accent mb-1">500+</h4>
                  <p className="text-sm text-slate-500">경매 컨설팅 건수</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-accent mb-1">200+</h4>
                  <p className="text-sm text-slate-500">인테리어 시공 건수</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">무료 상담 신청</h2>
              <p className="text-slate-400 mb-12 text-lg">
                궁금한 점이 있으신가요? 부담 없이 문의해주세요.<br />
                경매 물건 추천부터 인테리어 견적까지 친절하게 상담해 드립니다.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">전화 문의</h3>
                    <p className="text-slate-400">010-1234-5678</p>
                    <p className="text-xs text-slate-500 mt-1">평일 09:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">오시는 길</h3>
                    <p className="text-slate-400">서울시 강남구 테헤란로 123, 집라이프 401호</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">이메일</h3>
                    <p className="text-slate-400">contact@zip-life.kr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-900">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>연락처</FormLabel>
                        <FormControl>
                          <Input placeholder="010-0000-0000" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>문의 내용</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="경매 컨설팅 혹은 인테리어 견적 문의합니다." 
                            className="min-h-[120px] bg-slate-50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-slate-900 font-bold">
                    상담 신청하기
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
