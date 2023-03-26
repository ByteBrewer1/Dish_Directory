const Footer = () => {
  return (
    <footer className='p-8 flex flex-col  items-center gap-3 bg-rose-200 opacity-75'>
      <h2 className='footer-logo font-bold lowercase italic text-2xl'>
        Dish<span className='text-rose-500'>Directory</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} Dish Directory. <a href="https://404dev.in/"> Rahul Mistry.</a> All rights reserved.</p>
    </footer>
  );
};

export default Footer;
