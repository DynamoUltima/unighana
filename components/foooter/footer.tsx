const Footer = () => {
    return (
        <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <div className=''><div className="font-bold">UniGhana</div></div>
          <p className="text-center lg:text-start">£#########</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-extrabold">Company</p>
          
          <p className="text-base">Support</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-extrabold">Our Services</p>
          <p className="text-base">Applications For School</p>
          
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-extrabold">Legal</p>
          <p className="text-base">Terms & Conditions</p>
          <p className="text-base">Privacy policy</p>
        </div>
       
      </div>
    </div>
    );
}

export default Footer;