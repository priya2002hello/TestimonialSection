import Testimony from './Testimony';

//MainContent Component - > All the other components excluding header and footer are child components of this
export default function MainContent()
{
  return (
    <div className="MainContent">
    {/*Testimony Component contains Customer reviews*/}
    <Testimony/>
    </div>
  )
}

 