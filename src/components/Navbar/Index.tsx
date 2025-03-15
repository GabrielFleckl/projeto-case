import { Container } from "@/components/Container/Index";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/DarkToggle/Index";
import Logo from "@/components/Logo/Index";

export default function Navbar() {
  return (
    <Container full className="my-4">
      <header className="max-w-screen-7xl m-auto mb-10 flex items-center justify-between px-2 md:px-10 py-6">
        <Logo />

        <nav>
          <ul className="hidden cursor-pointer items-center gap-4 md:flex">
            <ModeToggle />
          </ul>

          {/* Sidebar */}
          <Sheet>
            <SheetTrigger className="border-primary bg-secondary/80 flex rounded-md border p-2 shadow backdrop-blur-lg md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4">
              <SheetHeader className="mb-4">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col items-center justify-center">
                <ModeToggle />
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </Container>
  );
}

