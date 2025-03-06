import { FaGithub } from "react-icons/fa6";

const Projects = () => {
    return (
        <section className="mt-16" id="projects">
            <div className="mx-5">
                <h5 className="text-5xl font-raleway font-semibold mb-2">Projects</h5>
                {/* If you have more than one project add "justify-content: evenly" for better layout */}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                    <div className="bg-slate-800 rounded-md p-4">
                        <p className="text-xl font-semibold mb-4">Charwiki</p>
                        <p className="text-base text-gray-400 mb-4">The Loomian Legacy PvP companion.</p>
                        <a rel="noopener" href="https://github.com/je-sendra/Charwiki" target="_blank" className="flex justify-end">
                            <div className="bg-yellow-300 p-2 rounded flex items-center">
                                <span style={{ fontSize: '1rem', color: 'black' }}>See on </span>
                                <FaGithub style={{ fontSize: '1.5rem', color: 'black', marginLeft: '0.5rem' }} />
                            </div>
                        </a>
                    </div>

                    <div className="bg-slate-800 rounded-md p-4">
                        <p className="text-xl font-semibold mb-4">AutoTime</p>
                        <p className="text-base text-gray-400 mb-4">Automatic clocker for the Intratime service.</p>
                        <a rel="noopener" href="https://github.com/je-sendra/AutoTime" target="_blank" className="flex justify-end">
                            <div className="bg-yellow-300 p-2 rounded flex items-center">
                                <span style={{ fontSize: '1rem', color: 'black' }}>See on </span>
                                <FaGithub style={{ fontSize: '1.5rem', color: 'black', marginLeft: '0.5rem' }} />
                            </div>
                        </a>
                    </div>

                    <div className="bg-slate-800 rounded-md p-4">
                        <p className="text-xl font-semibold mb-4">XmlTranslator</p>
                        <p className="text-base text-gray-400 mb-4">Lightweight translator of XML language files.</p>
                        <a rel="noopener" href="https://github.com/je-sendra/XmlTranslator" target="_blank" className="flex justify-end">
                            <div className="bg-yellow-300 p-2 rounded flex items-center">
                                <span style={{ fontSize: '1rem', color: 'black' }}>See on </span>
                                <FaGithub style={{ fontSize: '1.5rem', color: 'black', marginLeft: '0.5rem' }} />
                            </div>
                        </a>
                    </div>

                    <div className="bg-slate-800 rounded-md p-4">
                        <p className="text-xl font-semibold mb-4">GitHubToCalDAV</p>
                        <p className="text-base text-gray-400 mb-4">Generates a CalDAV calendar with GitHub issues and milestones due dates.</p>
                        <a rel="noopener" href="https://github.com/je-sendra/GitHubToCalDAV" target="_blank" className="flex justify-end">
                            <div className="bg-yellow-300 p-2 rounded flex items-center">
                                <span style={{ fontSize: '1rem', color: 'black' }}>See on </span>
                                <FaGithub style={{ fontSize: '1.5rem', color: 'black', marginLeft: '0.5rem' }} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
        </section>
    );
}

export default Projects;