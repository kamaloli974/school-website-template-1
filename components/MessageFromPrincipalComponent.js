function MessageFromPrincipalComponent() {
    return (
        <section className="message-from-principle grid grid-cols-4 gap-4 bg-slate-100 p-8">
            <img
                className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2 justify-self-start w-full md:h-full lg:h-[600px] rounded-lg "
                src="./img/principal-1.jpg"/>
            <div
                className="flex flex-col justify-self-end col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2 p-4 flex flex-col justify-start items-start lg:mt-8">
                <h3 className="text-3xl font-extrabold text-start mb-2">Message From Principal</h3>
                <p className="text-lg text-start italic">I wish that the educational journey of our children is happy
                    with wonderful experiences and beautiful memories to cherish. At our school, we have
                    three priorities: to provide children with modern educational facilities, to devise an imaginative
                    but intellectually challenging curriculum which will make the students want to learn irrespective
                    of tests and exams, and to employ staff who are knowledgeable about their areas of specialisation
                    and skilled in the art of getting children to develop both curiosity and understanding, the main
                    branches of human enquiry. Our school is committed to developing socially responsible citizens in
                    a safe, creative and educationally challenging environment that encourages students to be clear
                    about their values and communicate to the community, thus living up to our school motto “We learn
                    to serve”. Our goal is to build a sense of community and trust between children, parents, and staff.
                    We mainly focus on empowering our students and highlighting their leadership skills by providing
                    them a platform to enhance different attributes like communication skill, team building &
                    collaborative work, planning & strategy building, vision, persistence and determination. Our
                    continued partnership will ensure that our pupils continue to learn, progress and reach their
                    potential holistically!.</p>
            </div>
        </section>
    );
}

export default MessageFromPrincipalComponent;