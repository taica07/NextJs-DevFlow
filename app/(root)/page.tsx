import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  console;
  console.log(session);
  return (
    <div>
      <h1 className="text-3xl text-primary-500 ">
        Welcome to the world of Next js
      </h1>

      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
        className="px-10 pt-[100px]"
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
};

export default Home;
