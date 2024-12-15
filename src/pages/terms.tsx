
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Terms(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Terms`}
            description="Terms and conditions for ModuleJS">
            <main>
                <div className='parent-div'>
                    <h3>
                        Terms and Conditions for modulejs.org
                    </h3>
                    <h6>Effective Date: Dec 2024</h6>
                    <div className='div-contents'>
                        <div>
                            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the modulejs.org website operated by modulejs.org ("us", "we", or "our").
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                            Changes to Terms
                            </div>
                            <div>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                                Access and Use of the Service
                            </div>
                            <div>
                                <div>
                                <span className='mjs-bold'>Eligibility:</span> You must be at least 18 years old to use this site. By agreeing to these Terms, you represent and warrant to us that you are at least 18 years old.
                                </div>
                                <div>
                                <span className='mjs-bold'>License:</span> We grant you a non-exclusive, non-transferable, revocable license to access and use modulejs.org strictly in accordance with these terms of use.
                                </div>
                                <div>
                                <span className='mjs-bold'>Restrictions:</span> You agree not to use the Service for any illegal or unauthorized purpose nor to violate any laws in your jurisdiction (including but not limited to copyright laws).
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                            Intellectual Property
                            </div>
                            <div>
                            The Service and its original content, features, and functionality are and will remain the exclusive property of ModuleJS and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ModuleJS.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                            User Conduct
                            </div>
                            <div>
                            You agree to use modulejs.org only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the site.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                            Links to Other Sites
                            </div>
                            <div>
                            Our Service may contain links to third-party web sites or services that are not owned or controlled by ModuleJS. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party sites or services.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                            Limitation of Liability
                            </div>
                            <div>
                            In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                            Governing Law
                            </div>
                            <div>
                            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                            Contact Us
                            </div>
                            <div>
                            If you have any questions about these Terms, please contact us at support@modulejs.org
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
