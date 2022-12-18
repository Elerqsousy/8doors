import React from 'react';

function Index() {
  return (
    <div className="container flex items-center justify-center" style={{ minHeight: '100vh' }}>
      <div className="card px-10 py-10 w-96">
        <p className="text-slate-500">Please enter your email</p>
        <form>
          <label className="block mt-10">
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <button className="mt-10 w-full p-4 bg-sky-500/100">Send Me Reset Code</button>
        </form>
      </div>
    </div>
  );
}

export default Index;
