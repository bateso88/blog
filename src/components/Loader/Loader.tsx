const Loader = () => (
  <div className="text-center">
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 text-base leading-6 font-medium rounded-md text-white"
      disabled
    >
      <svg className="animate-spin mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Loading
    </button>
  </div>
);

export default Loader;
