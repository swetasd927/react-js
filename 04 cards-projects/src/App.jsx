import  Card from './Components/Card'

const App = () => {

   const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "1 week ago",
    post: "ReactJS Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    name: "Tesla",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    name: "NVIDIA",
    datePosted: "1 week ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logowik.com/content/uploads/images/adobe-firefly-icon91.logowik.com.webp",
    name: "Adobe",
    datePosted: "3 days ago",
    post: "Frontend Developer (React)",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    name: "OpenAI",
    datePosted: "1 day ago",
    post: "AI Research Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "San Francisco, USA"
  }
];

console.log(jobOpenings);


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        
        return <div key = {idx}>
        <Card company = {elem.name} datePosted = {elem.datePosted} location = {elem.location} post= {elem.post} brandLogo = {elem.brandLogo} pay = {elem.pay} tag1 = {elem.tag1} tag2 = {elem.tag2} /> 
        </div>
      })}
    </div>
  )
}

export default App