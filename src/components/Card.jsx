import image from "../assets/image-product-desktop.jpg";
import cart from "../assets/icon-cart.svg";

export default function Card() {
  return (
    <>
      <div className="bg-[#f2ebe3] w-[900px] h-[600px] inset-0 mx-auto  my-auto absolute">
        <div className="bg-white max-w-[400px] h-[300px] inset-0 mx-auto  my-auto absolute rounded">
          <div className="grid grid-cols-2 ">
            <div>
              <img src={image} alt="" className="h-[300px] rounded " />
            </div>
            <div className="">
              <h4 className="pl-10 pt-6 text-sm">Perfume</h4>
              <h1 className="pl-10 text-xl">
                <b>Gabrielle</b>
              </h1>
              <h1 className="pl-10 text-xl">
                <b>Essence Eau</b>
              </h1>
              <h1 className="pl-10 text-xl">
                <b>De Parfum</b>
              </h1>
              <p className="pl-10 text-xs">A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the house of CHANEL.</p>

              <h1 className="pl-10 text-2xl text-green-600">
                <b>$149.99</b>
              </h1>
              <div className="grid grid-cols-2">
                <button className="flex justify-center items-center ml-8 gap-3 bg-green-500 rounded-xl h-12 w-36">
                  <img src={cart} alt="" className="" />
                  <span className="">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
