
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Privacy(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Privacy`}
            description="Privacy policy for ModuleJS">
            <main>
                <div className='parent-div'>
                    <h3>
                        Privacy Policy for modulejs.org
                    </h3>
                    <h6>Effective Date: Dec 2024</h6>
                    <div className='div-contents'>
                        <div>
                            Welcome to modulejs.org. Your privacy is critically important to us. This Privacy Policy outlines how we handle information on our site, ensuring your data is protected while you use our services.
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                                Information We Do Not Collect
                            </div>
                            <div>
                                <span className='mjs-bold'>Cookies:</span> We do not use cookies on our website. As such, we do not store any cookies on your device.
                                Personal Information: We do not collect any personal information from our users. This includes but is not limited to names, email addresses, IP addresses, or any other form of Personally Identifiable Information (PII).
                                Usage Data: We do not track or log any activity on our site. Your visits to modulejs.org are not recorded or stored.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                                Data Sharing
                            </div>
                            <div>
                                <span className='mjs-bold'>No Data Sharing:</span> We do not share any data with third parties since we do not collect or store any information from our visitors.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                                Security
                            </div>
                            <div>
                                Since we do not collect or store any personal data, there are no security measures in place for data protection as there is no data to protect. However, our website is hosted on secure servers, and we ensure that all communications through our site are secure.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                                Children's Privacy
                            </div>
                            <div>
                                Our services are not aimed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so we can take necessary actions.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                                Changes to This Privacy Policy
                            </div>
                            <div>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                                Contact Us
                            </div>
                            <div>
                                If you have any questions about this Privacy Policy, please contact us: support@modulejs.org
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                                Compliance with Laws
                            </div>
                            <div>
                                We are committed to ensuring compliance with applicable data protection laws and regulations. Since we do not collect or store any user data, most legal obligations do not apply; however, we adhere to general privacy principles to ensure your rights are respected.
                            </div>
                        </div>
                        <div>
                            <div className='mjs-section-header'>
                                Consent
                            </div>
                            <div>
                                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
