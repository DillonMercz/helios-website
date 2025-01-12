const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/20 rounded-xl hover:border-white/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">AI Sports Prediction Platform</h3>
            <p className="text-gray-400 mb-6">Advanced machine learning system achieving 75%+ accuracy in sports betting predictions.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
            </div>
            <div className="text-green-400 font-semibold">75% prediction accuracy</div>
          </div>
          <div className="p-8 border border-white/20 rounded-xl hover:border-white/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">Infinite LLM Input System</h3>
            <p className="text-gray-400 mb-6">Revolutionary system enabling unlimited context windows for large language models.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">PyTorch</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">CUDA</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">C++</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Redis</span>
            </div>
            <div className="text-green-400 font-semibold">100x improvement in context length</div>
          </div>
          <div className="p-8 border border-white/20 rounded-xl hover:border-white/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">Enterprise Resource Planning Suite</h3>
            <p className="text-gray-400 mb-6">Comprehensive ERP system for manufacturing industry with real-time analytics.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Vue.js</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">PostgreSQL</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Docker</span>
            </div>
            <div className="text-green-400 font-semibold">40% efficiency increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;