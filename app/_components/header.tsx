import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="p-5 justify-between flex flex-row items-center">
        <Image src="/logo.png" alt="Fsw barber" width={120} height={22} />
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon size={16} />
        </Button>
      </CardContent>
    </Card>
  );
};

export { Header };
