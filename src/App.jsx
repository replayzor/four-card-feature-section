/* 
# Front-end Style Guide

- Font size: 15px

### Fonts

- Weights: 200, 400, 600

*/

function App() {
	return (
		<main className="flex items-center justify-center bg-neutral-veryLightGray">
			<article className="flex flex-col items-center justify-center min-h-screen py-10">
				<div className="w-[375px] md:w-full flex items-center justify-center flex-col">
					<h1 className="text-2xl md:text-3xl font-poppins font-[600] text-neutral-grayishBlue">
						Reliable, efficient delivery
					</h1>
					<h1 className="font-[600] tracking-wider md:text-3xl text-2xl pt-1 text-neutral-veryDarkBlue">
						Powered by Technology
					</h1>
					<p className="text-center w-[300px] md:w-[50%] pt-4 text-neutral-grayishBlue">
						Our Artificial Intelligence powered tools use millions of project
						data points to ensure that your project is successful
					</p>
				</div>
				<section className="w-[320px] md:grid-cols-3 md:w-[1000px] md:grid pt-16 flex flex-col gap-6">
					<div className="relative bg-white rounded-lg shadow-lg top-1/2 shadow-neutral-grayishBlue">
						<div className="mb-5 border-2 rounded-t-lg border-primary-cyan"></div>
						<h1 className="ml-6 text-2xl font-bold tracking-wide text-neutral-veryDarkBlue">
							Supervisor
						</h1>
						<p className="w-[80%] ml-6 mt-2 text-sm text-neutral-grayishBlue">
							Monitors activity to identify project roadblocks
						</p>
						<div className="flex items-end justify-end pt-6">
							<img src="/images/icon-supervisor.svg" alt="" className="p-6" />
						</div>
					</div>
					<div className="bg-white rounded-lg shadow-lg md:col-start-2 md:col-span-1 shadow-neutral-grayishBlue">
						<div className="mb-5 border-2 rounded-t-lg border-primary-red"></div>
						<h1 className="ml-6 text-2xl font-bold tracking-wide text-neutral-veryDarkBlue">
							Team Builder
						</h1>
						<p className="w-[80%] ml-6 mt-2 text-sm text-neutral-grayishBlue">
							Scans our talent network to create the optimal team for your
							project
						</p>
						<div className="flex items-end justify-end pt-6">
							<img src="/images/icon-team-builder.svg" alt="" className="p-6" />
						</div>
					</div>
					<div className="bg-white rounded-lg shadow-lg md:col-start-2 md:col-span-1 shadow-neutral-grayishBlue">
						<div className="mb-5 border-2 rounded-t-lg border-primary-orange"></div>
						<h1 className="ml-6 text-2xl font-bold tracking-wide text-neutral-veryDarkBlue">
							Karma
						</h1>
						<p className="w-[80%] ml-6 mt-2 text-sm text-neutral-grayishBlue">
							Regularly evaluates our talent to ensure quality
						</p>
						<div className="flex items-end justify-end pt-6">
							<img src="/images/icon-karma.svg" alt="" className="p-6" />
						</div>
					</div>
					<div className="bg-white rounded-lg shadow-lg md:bottom-[60%] md:relative shadow-neutral-grayishBlue">
						<div className="mb-5 border-2 rounded-t-lg border-primary-blue"></div>
						<h1 className="ml-6 text-2xl font-bold tracking-wide text-neutral-veryDarkBlue">
							Calculator
						</h1>
						<p className="w-[80%] ml-6 mt-2 text-sm text-neutral-grayishBlue">
							Uses data from past projects to provide better delivery estimates
						</p>
						<div className="flex items-end justify-end pt-6">
							<img src="/images/icon-calculator.svg" alt="" className="p-6" />
						</div>
					</div>
				</section>
			</article>
		</main>
	);
}

export default App;
