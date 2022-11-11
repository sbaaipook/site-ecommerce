import "./Home.css";
import Container from 'react-bootstrap/Container';
const Home =({children})=>{
  return(
    <div>
      <Container>{children}</Container>
    </div>
  )
}
export default Home;
