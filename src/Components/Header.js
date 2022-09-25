import logo from '../logo.svg';

//header component 
export default function Header() {
  return (
    <div className="Header">
      <div className="Nav">
        <img src={logo} width="100" height="100" alt="" />
      </div>
    </div>
  );
}
