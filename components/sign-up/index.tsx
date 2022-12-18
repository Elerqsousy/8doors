import React from 'react';

function SignUp() {
  return (
    <div className="container flex items-center justify-center" style={{ minHeight: '100vh' }}>
      <div className="card px-10 py-10 w-96">
        <h1 className="text-3xl">Signup</h1>
        <p className="text-slate-500">sign up to continue</p>
        <form>
          <label className="block mt-10">
            <span className="block text-sm font-medium text-slate-700">User Name</span>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <label className="block mt-10">
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>
          <label className="block mt-10">
            <span className="block text-sm font-medium text-slate-700">Password</span>
            <input
              type="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-12"
            />
          </label>
          <button className="mt-10 w-full p-4 bg-sky-500/100">SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
