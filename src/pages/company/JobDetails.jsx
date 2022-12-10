import { useParams } from "react-router-dom";
import { jobs } from "../../data/constantData";
jobs;

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.filter((job) => job.id === +id);
  console.log(job);

  return <div>JobDetails</div>;
};

export default JobDetails;
