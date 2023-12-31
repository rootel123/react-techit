import Banner from "./components/Banner";
import Header from "./components/Header";
import KdtSection from "./components/KdtSection";
import Topbanner from "./components/Topbanner";

const App = () => {
  return (
    <div className="font-pretendard text-techit-gray-300">
      <Topbanner />
      <Header />
      <Banner />
      <KdtSection />
      <section className="mt-20 bg-green-100 max-w-screen-xl mx-auto px-6">
        <div className="bg-red-100 h-[64.5px]">Schedule</div>
        <div className="bg-blue-100 h-[280px]">KDT</div>
      </section>
      <div className="bg-orange-200 h-[206px] mt-20">Alram Banner</div>
      <section className="mt-20 bg-green-100 max-w-screen-xl mx-auto px-6">
        <div className="bg-red-100 h-[64.5px]">Onboarding</div>
        <div className="bg-yellow-100 grid grid-cols-3 gap-6 justify-items-center">
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
          <div className="bg-purple-100 w-[397px] h-[316px]">Card</div>
        </div>
      </section>
      <section className="mt-20 bg-green-100 max-w-screen-xl mx-auto px-6">
        <div className="bg-red-100 h-[64.5px]">Education</div>
        <div className="bg-yellow-100 grid grid-cols-2 gap-6 justify-items-center">
          <div className="bg-purple-100 w-[604px] h-[310px]">Card</div>
          <div className="bg-purple-100 w-[604px] h-[310px]">Card</div>
          <div className="bg-purple-100 w-[604px] h-[310px]">Card</div>
        </div>
      </section>
      <footer className="mt-40 max-w-screen-xl mx-auto bg-gray-300 h-[418px]">
        Footer
      </footer>
    </div>
  );
};

export default App;
