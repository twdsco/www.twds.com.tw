import {
  Store,
  AppWindowMac,
  CloudCog,
  Smartphone,
  Server,
  Container,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ProjectTracker from "@/components/ProjectTracker";

interface ServiceItem {
  Icon: LucideIcon;
  title: string;
}

interface PartnerItem {
  img: string;
  url: string;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold underline decoration-blue-100 underline-offset-4 decoration-4 inline-block mb-4">
      {children}
    </h2>
  );
}

export default function Home() {
  const serviceItems: ServiceItem[] = [
    { Icon: Store, title: "網路設備批發/零售" },
    { Icon: AppWindowMac, title: "網頁應用程式開發與維護" },
    { Icon: CloudCog, title: "系統與設備維護" },
    { Icon: Smartphone, title: "應用程式解決方案" },
    { Icon: Server, title: "網站代管營運" },
    { Icon: Container, title: "容器化解決方案" },
  ];

  const partners: PartnerItem[] = [
    { img: "proxmox.png", url: "https://www.proxmox.com" },
    { img: "unitech.svg", url: "https://www.unitech.com.tw/" },
  ];
  return (
    <div>
      <div
        id="banner"
        className="bg-cover bg-center text-white h-1/2 min-h-[410px] flex justify-center items-center text-shadow-md font-bold bg-[url('/img/background.jpg')]"
      >
        <div className="container mx-auto">
          <img
            src="/logo/twds_white.svg"
            alt="Taiwan Digital Streaming Co. Logo"
            width="128"
          />
          <h1 className="text-4xl md:text-5xl">台灣數位串流有限公司</h1>
          <p className="text-2xl md:text-4xl mt-2">
            Taiwan Digital Streaming Co.
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center my-8 flex flex-col gap-8">
        <section>
          <SectionTitle>簡介</SectionTitle>
          <p>
            發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。
          </p>
        </section>

        <section>
          <SectionTitle>營運項目</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {serviceItems.map(({ Icon, title }, index) => (
              <div
                key={index}
                className="bg-noise bg-blue-50 text-blue-950/90 p-4 rounded flex items-center justify-center flex-col gap-2"
              >
                <Icon size={56} strokeWidth={1.5} />
                <div className="font-bold">{title}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>專案追蹤</SectionTitle>
          <div className="text-left">
            <ProjectTracker />
          </div>
        </section>
        
        <section>
          <SectionTitle>經銷/合作</SectionTitle>
          <div className="flex justify-center items-center">
            {partners.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="inline-block m-2"
                style={{
                  backgroundImage: `url('/img/partners/${item.img}')`,
                  width: "300px",
                  height: "64px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              ></a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
