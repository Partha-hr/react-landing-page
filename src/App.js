
import HeroSection from './HeroSection';
import './App.css';
// import Header from './Header';
import SocialProof from './SocialProofSection';
import Feature from './Feature';
import Testimonials from './Testomonials';
import FeaturesSection from './FeatureSection';
import SectionDivider from './SectionDivider';
import FAQ from './FAQ';
import BlogSection from './Blog';
import CTASection from './CTA';
import Footer from './Footer';


function App() {
  return (
    <div className='App'>
{/* <Header /> */}
<HeroSection />
<SocialProof />
<SectionDivider/>
<Feature />
<Testimonials />
<FeaturesSection/>
<SectionDivider/>
<FAQ/>
<BlogSection/>
<CTASection/>
<Footer/>
    </div>
  );
}

export default App;
