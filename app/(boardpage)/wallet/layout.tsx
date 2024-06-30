import Navbar from "@/app/dashboard/sidnav/page";
import Wallet from "@/app/(boardpage)/wallet/page";
import Sidnav from "@/app/dashboard/sidnav/page";

const WalletPage = () => {
  return (
    <div>
      <Sidnav />
      <div className="p-4">
        <Wallet />
      </div>
    </div>
  );
};

export default WalletPage;
