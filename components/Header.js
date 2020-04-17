import Menu from "./Menu";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Logo />
      <Menu />

      <style jsx>
        {`
          header{
            display: flex;
            padding: 30px;
            justify-content: space-between;
            align-items: center;
            position: relative;
            z-index: 1;
          } 

          @media(max-width: 735px){
            header {
              display: block;
              text-align: left;
            }
          }
          `}
      </style>
    </header>
  );
}
