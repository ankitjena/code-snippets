import Queue from "bull";

const diffQueue = new Queue("Diff for changes");

diffQueue.process(async(job, done) => {
  console.log("processing");
  done();
});

export default diffQueue;