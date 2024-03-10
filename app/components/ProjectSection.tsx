import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import rental from "../../public/rental.png";
import gameSpace from "../../public/game-place.png";
import swaraj from "../../public/swaraj.jpg";
import CardContainer from "./CardContainer";

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full py-12  border-t">
      <div className="container px-4 md:px-6">
        <div className="grid max-w-5xl mx-auto items-start gap-6 lg:grid-cols-1 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Projects
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Crafted Projects
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:order-last">
            <CardContainer>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-2 lg:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">Swaraj Lunch Home</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our React Native app facilitates local food delivery with
                      role-based access for customers and restaurants. Customers
                      can easily browse menus, place orders, and track
                      deliveries, while restaurant partners manage menus and
                      orders through a dedicated dashboard. With streamlined
                      features like payment integration and notifications, we
                      aim to enhance the food delivery experience for all users.
                    </p>
                  </div>

                  <Image
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
                    src={swaraj}
                  />
                </div>
              </CardContent>
            </CardContainer>
            <CardContainer>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-2 lg:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">
                      Vivaha by Civi - ongoing project
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our comprehensive wedding management and booking web
                      application streamlines every aspect of your special day.
                      Whether you&apos;re securing wedding halls, makeup
                      artists, photographers, decorators, caterers, or even
                      rentals for clothes, cameras, and accessories, we&apos;ve
                      got you covered. With intuitive interfaces and robust
                      management tools, couples can effortlessly plan every
                      detail, ensuring a seamless and unforgettable wedding
                      experience.
                    </p>
                  </div>

                  <Image
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
                    src={rental}
                  />
                </div>
              </CardContent>
            </CardContainer>
            <CardContainer>
              <CardContent className="p-4 md:p-6">
                <div className="grid gap-2 lg:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-bold">GameSapce</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our motto at Game Finder is to revolutionize how you
                      discover and enjoy games. Powered by React 18, our
                      platform offers a dynamic and immersive gaming experience.
                      Whether you&apos;re searching for the latest releases or
                      timeless classics, Game Finder is your go-to destination
                      for endless entertainment and excitement.
                    </p>
                  </div>
                  <Image
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
                    src={gameSpace}
                  />
                </div>
              </CardContent>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
