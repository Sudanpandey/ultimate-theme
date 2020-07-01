import NavBar from "components/navbar";

import { navItems } from "mock";

import Logo from "assets/logo";

const HomePage = () => <NavBar logo={<Logo />} navItems={navItems} />;
export default HomePage;
