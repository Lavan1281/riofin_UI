
import { stats } from '../constants/index1';

const Stats = () => (
  <div className='bg-white flex justify-center items-center flex-wrap p-5'>
    {stats.map((stat) => (
      <section key={stat.id} className='m-4 text-center'>
        <h4 className='font-poppins font-semibold text-4xl md:text-5xl lg:text-5xl text-blue-600'>
          {stat.value}
        </h4>
        <p className='font-poppins font-semibold text-xl md:text-2xl lg:text-2xl mt-3 text-blue-950'>
          {stat.title}
        </p>
      </section>
    ))}
  </div>
);

export default Stats;
