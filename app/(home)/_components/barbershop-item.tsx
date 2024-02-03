import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { IBarbershopItemProps } from "@/app/_lib/definitions";
import { StarIcon } from "lucide-react";

import Image from "next/image";

const BarbershopItem = ({ barbershop }: IBarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-0">
        <div className="px-1 mt-1 relative">
          <Badge variant="secondary" className="opacity-90 absolute top-1 gap-2 left-2 items-center justify-center flex">
            <StarIcon size={12} className="text-primary fill-primary"/>
            <span className="text-xs">5,0</span>
          </Badge>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            height={0}
            width={0}
            sizes="100vw"
            unoptimized
            className="h-[159px] w-full object-cover rounded-xl"
          />
        </div>

        <div className="px-1 pb-1 mt-3">
          <h2 className="font-bold overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button variant="secondary" className="w-full mt-3 rounded-b-xl">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { BarbershopItem };
