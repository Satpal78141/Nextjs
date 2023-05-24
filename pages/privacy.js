import React from 'react'
import privacyStyle from "../styles/privacy.module.css"

const privacy = () => {
  return (
    <div>
          <div className={`${privacyStyle.container_fluid}`}>
              <div className={`${privacyStyle.wrap_collabsible}`}>
                  <input id="collapsible3" className={`${privacyStyle.toggle}`} type="checkbox" />
                  <label for="collapsible3" className={`${privacyStyle.lbl_toggle}`} tabindex="0">Summary</label>
                  <div className={`${privacyStyle.collapsible_content}`}>
                      <div className={`${privacyStyle.content_inner}`}>
                          <div> This privacy note explains how we collect, store, and use your information. </div>
                          <div> We value your privacy and follow data protection laws, using personal information only with
                              clear
                              permission.</div>
                          <div>We store personal and sensitive information securely, and the company doesn’t share your data in
                              ways
                              not mentioned in the policy.</div>
                          <h4 className={`${privacyStyle.facts}`}>Facts</h4>
                      <ul>
                          <li className={privacyStyle.li}> Company: Tiny Medical Apps Limited developers of the Digital Health Passport</li>
                          <li className={privacyStyle.li}> Address: Canterbury House, 1 Royal St, Lambeth, London SE1 7LL</li>
                          <li className={privacyStyle.li}> Email address: support@tinymedicalapps.com</li>
                          <li className={privacyStyle.li}> Telephone number: 0207 859 4169</li>
                          <li className={privacyStyle.li}> Privacy Notice: Covers personal data collection, storage, and usage</li>
                          <li className={privacyStyle.li}> Data Protection Legislation: GDPR and Data Protection Act 2018</li>
                          <li className={privacyStyle.li}> Legal basis for processing personal data: Article 6(a) Consent</li>
                          <li className={privacyStyle.li}> Personal data collected: Name, contact details, health conditions, emergency contacts, and
                              more</li>
                          <li className={privacyStyle.li}> Data retention period: 18 months + 3 days from last successful login (+1 month for backups)
                          </li>
                          <li className={privacyStyle.li}> Data storage: Encrypted within a secure cloud datastore in the UK</li>
                          <li className={privacyStyle.li}> Data sharing: Limited number of GDPR_compliant 3rd party data processors</li>
                          <li className={privacyStyle.li}> Non_identifiable data sharing: Health & Research Organizations for service evaluation</li>
                          <li className={privacyStyle.li}> Accessing personal data: Users can request access to their data by contacting the company
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className={`${privacyStyle.wrap_collabsible}`} >
          <input id="collapsible3_1" className={`${privacyStyle.toggle} `} type="checkbox"/>
          <label for="collapsible3_1" className={`${privacyStyle.lbl_toggle}`}  tabindex="0">Information About Us</label>
          <div className={`${privacyStyle.collapsible_content}`} >
                    <div className={`${privacyStyle.content_inner}`}>
                        <div><b className={privacyStyle.b}>Company Name:</b> Tiny Medical Apps Limited.</div>

                        <div><b className={privacyStyle.b}>Registered in England Company number:</b> 10051596</div>

                        <div> <b className={privacyStyle.b}> Address:</b> Canterbury House, 1 Royal St, Lambeth, London SE1 7LL</div>

                        <div> <b className={privacyStyle.b}> VAT registration:</b> GB296395447</div>

                        <div> <b className={privacyStyle.b}> ICO Registration:</b> ZA282635</div>

                        <div> <b className={privacyStyle.b}> Data Protection Officer: </b>Matt Bourne</div>

                        <div> <b className={privacyStyle.b}>Clinical Safety Officer:</b> Beverley Scott</div>

                        <div> <b className={privacyStyle.b}>Email address: </b>support@tinymedicalapps.com</div>

                        <div> <b className={privacyStyle.b}>Telephone number: </b>0207 859 4169</div>
                    </div>
                </div>
            </div>
            </div>
            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_2" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_2" className={`${privacyStyle.lbl_toggle}`} tabindex="0"> What Does This Notice Cover? </label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>This Privacy Information explains how we use your personal data: how it is collected, how it is
                            held, and how it is processed. It also explains your rights under the law relating to your
                            personal data.</div>
                    </div>
                </div>
            </div>
            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_3" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_3" className={`${privacyStyle.lbl_toggle}`} tabindex="0"> What Is Personal Data and our Legal Basis to
                    process Personal Data?</label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>TPersonal data is defined by the General Data Protection Regulation (EU Regulation 2016/679) (the
                            “GDPR”) and the Data Protection Act 2018 (collectively, “the Data Protection Legislation”) as
                            ‘any information relating to an identifiable person who can be directly or indirectly identified
                            in particular by reference to an identifier’.</div>
                        <div>Personal data is, in simpler terms, any information about you that enables you to be identified.
                            Personal data covers obvious information such as your name and contact details, but it also
                            covers less obvious information such as identification numbers, electronic location data, and
                            other online identifiers.</div>
                        <div>We rely on Article 6(a) Consent as our legal basis for processing personal data. That means we
                            will only process your personal data with your explicit consent.</div>
                        <div>he personal data that we use is set out in Part 5, below.</div>
                    </div>
                </div>
            </div>


            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_4" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_4" className={`${privacyStyle.lbl_toggle}`} tabindex="0"> What Does This Notice Cover? </label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>Under the Data Protection Legislation, you have the following rights, which we will always work
                            to uphold:</div>
                        <ol>
                            <li className={privacyStyle.li}> The right to be informed about our collection and use of your personal data. This Privacy
                                Notice
                                should tell you everything you need to know, but you can always contact us to find out more
                                or
                                to ask any questions using the details in Part 11.</li>
                            <li className={privacyStyle.li}>The right to access the personal data we hold about you. Part 10 will tell you how to do
                                this.</li>
                            <li className={privacyStyle.li}> The right to have your personal data rectified if any of your personal data held by us is
                                inaccurate or incomplete. Please contact us using the details in Part 11 to find out more.
                            </li>
                            <li className={privacyStyle.li}>The right to be forgotten, i.e. the right to ask us to delete or otherwise dispose of any of
                                your personal data that we hold. Please contact us using the details in Part 12 to find out
                                more.</li>
                            <li className={privacyStyle.li}>The right to restrict (i.e. prevent) the processing of your personal data.</li>
                            <li className={privacyStyle.li}>The right to object to us using your personal data for a particular purpose or purposes.
                            </li>
                            <li className={privacyStyle.li}>The right to withdraw consent. This means that, if we are relying on your consent as the
                                legal
                                basis for using your personal data, you are free to withdraw that consent at any time.</li>
                            <li className={privacyStyle.li}> The right to data portability. This means that, if you have provided personal data to us
                                directly, we are using it with your consent or for the performance of a contract, and that
                                data
                                is processed using automated means, you can ask us for a copy of that personal data to
                                re_use
                                with another service or business in many cases.</li>
                            <li className={privacyStyle.li}>Rights relating to automated decision_making and profiling. We do not use your personal data
                                in
                                this way.</li>
                        </ol>
                        <div>For more information about our use of your personal data or exercising your rights as outlined
                            above, please contact us using the details provided in Part 12.</div>
                        <div>It is important that your personal data is kept accurate and up_to_date. If any of the personal
                            data we hold about you changes, please keep us informed as long as we have that data.</div>
                        <div>Further information about your rights can also be obtained from the Information Commissioner’s
                            Office or your local Citizens Advice Bureau.</div>
                        <div>If you have any cause for complaint about our use of your personal data, you have the right to
                            lodge a complaint with the Information Commissioner’s Office. We would welcome the opportunity
                            to resolve your concerns ourselves, however, so please contact us first, using the details in
                            Part 12.</div>
                    </div>
                </div>
            </div>
            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_5" className={`${privacyStyle.toggle}`} type="checkbox"/>
                <label for="collapsible3_5" className={`${privacyStyle.lbl_toggle}`} tabindex="0"> What Personal & Sensitive Data Do You Collect
                    and How?</label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>Depending upon your use of our App, we may collect and hold some or all of the personal and
                            non_personal data set out in the table below, using the methods also set out in the table.</div>
                        <h4 className={privacyStyle.h4}>Special Category Data</h4>

                            <div className={`${privacyStyle.wrap_collabsible}`}>
                                <input id="collapsible3_5_1" className={`${privacyStyle.toggle}`} type="checkbox" />
                                <label for="collapsible3_5_1" className={`${privacyStyle.sub_lbl_toggle}`} tabi   ndex="0">Health</label>
                                <div className={`${privacyStyle.collapsible_content } ${privacyStyle.bottom_1}`}>
                                    <div className={`${privacyStyle.content_inner}`}>
                                        <div>Health: including physical health conditions (asthma, allergy), clinical
                                            management
                                            as it relates to specific health conditions (asthma/allergy care plan,
                                            asthma/allergy triggers, Adrenaline Pen), scores and measures relevant to
                                            specific
                                            illnesses used to monitor progress (symptoms, peak flows, adverse health
                                            outcomes).
                                            Name and contact details for people to contact in an emergency.</div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data </b> Self_entered on onboarding, within account &
                                            profile
                                            settings, symptoms and measures within health tracker and uploading of care plan
                                            within care plan section.</div>
                                        <div><b className={privacyStyle.b}>Required? </b>Only health conditions (e.g. Asthma, Allergies are required in
                                            order
                                            to provide the
                                            service).
                                            Ethnicity is not required but useful to ensure we are reaching the whole target
                                            population.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${privacyStyle.wrap_collabsible } ${privacyStyle.top_o}`}>
                                <input id="collapsible3_5_2" className={`${privacyStyle.toggle}`} type="checkbox" />
                                <label for="collapsible3_5_2" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Ethnicity</label>
                                <div className={`${privacyStyle.collapsible_content}`}>
                                    <div className={`${privacyStyle.content_inner}`}>

                                    </div>
                                </div>
                            </div>
                            <br />
                            <h4 className={privacyStyle.h4}>Personal Data</h4>
                            <div className={`${privacyStyle.wrap_collabsible}`}>
                                <input id="collapsible3_5_3" className={`${privacyStyle.toggle}`} type="checkbox" />
                                <label for="collapsible3_5_3" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Social Login</label>
                                <div className={`${privacyStyle.collapsible_content }`}>
                                    <div className={`${privacyStyle.content_inner }`}>
                                        <div><b className={privacyStyle.b}>Social Login : </b>Data from Social Login including Name, email address &
                                            avatar
                                        </div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data : </b>Registration and Login: Social Media.</div>
                                        <div><b className={privacyStyle.b}>Required? </b>Yes (if account creation)
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${privacyStyle.wrap_collabsible } ${privacyStyle.top_o}`}>
                                <input id="collapsible3_5_4" className={`${privacyStyle.toggle}`} type="checkbox" />
                                <label for="collapsible3_5_4" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">NHS Login</label>
                                <div className={`${privacyStyle.collapsible_content }`}>
                                    <div className={`${privacyStyle.content_inner}`}>
                                        <div><b className={privacyStyle.b}>NHS Login :</b> Data from NHS Login accounts including Name, NHS Number, email
                                            address & mobile telephone number</div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data :</b>Registration and Login: NHS Login</div>
                                        <div><b className={privacyStyle.b}>Required? </b>Yes (if account creation)
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`${privacyStyle.wrap_collabsible } ${privacyStyle.top_o}`}>
                                <input id="collapsible3_5_5" className={`${privacyStyle.toggle}`} type="checkbox" />
                                <label for="collapsible3_5_5" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Profile
                                    information</label>
                                <div className={`${privacyStyle.collapsible_content}`}>
                                    <div className={`${privacyStyle.content_inner}`}>
                                        <div><b className={privacyStyle.b}>Profile information :</b> preferences</div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data :</b>Settings: Entered during onboarding and within
                                            settings</div>
                                        <div><b className={privacyStyle.b}>Required? </b>No</div>
                                    </div>
                                </div>
                            </div>


                            <div className={`${privacyStyle.wrap_collabsible} ${privacyStyle.top_o} `} >
                                <input id="collapsible3_5_6" className={`${privacyStyle.toggle} `}type="checkbox" />
                                <label for="collapsible3_5_6" className={`${privacyStyle.sub_lbl_toggle} `} tabindex="0">Device ID</label>
                                <div className={`${privacyStyle.collapsible_content } `}>
                                    <div className={`${privacyStyle.content_inner} `}>
                                        <div><b className={privacyStyle.b}>Device ID</b></div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data:</b> A unique ID for each device is provided by the
                                            platform (IOS/Android)</div>
                                        <div><b className={privacyStyle.b}>Required? </b>Yes</div>
                                    </div>
                                </div>
                            </div>


                            <div className={`${privacyStyle.wrap_collabsible } ${privacyStyle.top_o}`}>
                                <input id="collapsible3_5_7" className={`${privacyStyle.toggle}`} type="checkbox" />
                                <label for="collapsible3_5_7" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Location Data</label>
                                <div className={`${privacyStyle.collapsible_content }`}>
                                    <div className={`${privacyStyle.content_inner}`}>
                                        <div><b className={privacyStyle.b}>Location Data</b></div>
                                        <div><b className={privacyStyle.b}> Location based features: </b>Weather, Pollution & Pollen alerts, medication
                                            reminders</div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data: </b>Requires in_app permissions. Native feature of
                                            both
                                            platforms.</div>
                                        <div><b className={privacyStyle.b}>Required? </b>No</div>
                                    </div>
                                </div>
                            </div>


                            <div className={`${privacyStyle.wrap_collabsible } ${privacyStyle.top_o}`}>
                                <input id="collapsible3_5_8" className={`${privacyStyle.toggle}`} type="checkbox" />
                                <label for="collapsible3_5_8" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Emergency
                                    contacts</label>
                                <div className={`${privacyStyle.collapsible_content}`}>
                                    <div className={`${privacyStyle.content_inner}`}>     
                                        <div><b className={privacyStyle.b}>Emergency contacts: </b>Emergency contacts name & telephone number</div>
                                        <div><b className={privacyStyle.b}> Location based features: </b>Self_entered within the Emergency plan section
                                            of
                                            the app.</div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data: </b>Requires in_app permissions. Native feature of
                                            both
                                            platforms.</div>
                                        <div><b className={privacyStyle.b}>Required? </b>No</div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <h4 className={privacyStyle.h4}>Non_Personal Data</h4>
                            <div className={`${privacyStyle.wrap_collabsible}`}>
                                <input id="collapsible3_5_9" className={`${privacyStyle.toggle}`} type="checkbox" />
                                <label for="collapsible3_5_9" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Profile_information</label>
                                <div className={`${privacyStyle.collapsible_content }`}>

                                    <div className={`${privacyStyle.content_inner}`}>
                                        <div><b className={privacyStyle.b}>Profile_information: </b>Profile information: Behaviours
                                        <div>Analytic activity within: app: Use of app features, including time and frequency
                                        </div>
                                        </div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data : </b>Using cookie_less analytics from Google
                                            Analytics
                                            (GA4)</div>
                                        <div><b className={privacyStyle.b}>Required? </b>No
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${privacyStyle.wrap_collabsible} ${privacyStyle.top_o} `}>
                                <input id="collapsible3_5_0" className={`${privacyStyle.toggle} `} type="checkbox" />
                                <label for="collapsible3_5_0" className={`${privacyStyle.sub_lbl_toggle} `} tabindex="0">Audit
                                    Information</label>
                                <div className={`${privacyStyle.collapsible_content} ${privacyStyle.bottom_1}`}>
                                    <div className={`${privacyStyle.content_inner}`}>
                                        <div><b className={privacyStyle.b}>Audit Information: </b> Monitoring access when data within the app is viewed
                                            or
                                            edited</div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data :</b>Events on the device pushed to database via REST
                                            API
                                        </div>
                                        <div><b className={privacyStyle.b}>Required? </b>Yes
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`${privacyStyle.wrap_collabsible} ${privacyStyle.top_o}`}>
                                <input id="collapsible3_5_1_0" className={`${privacyStyle.toggle}`} type="checkbox" />
                                <label for="collapsible3_5_1_0" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Crash
                                    reporting</label>
                                <div className={`${privacyStyle.collapsible_content} ${privacyStyle.bottom_1}`}>
                                    <div className={`${privacyStyle.content_inner}`}>
                                        <div><b className={privacyStyle.b}>Crash reporting: </b> Crash reporting data including operating system, device
                                            type, app version, state of device and error information.</div>
                                        <div><b className={privacyStyle.b}>How we Collect the Data :</b>Data captured if the app experiences crashes or
                                            exceptions. Using Sentry. No PID shared.</div>
                                        <div><b className={privacyStyle.b}>Required? </b>No</div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>

            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_6" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_6" className={`${privacyStyle.lbl_toggle}`} tabindex="0"> How Do You Use My Personal Data?</label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>Under the Data Protection Legislation, we must always have a lawful basis for using personal
                            data. The following table describes how we may use your personal data, and our lawful bases for
                            doing so:</div>
                        <h4 className={privacyStyle.h4}>What we Do</h4>
                        <ul>
                            <li className={privacyStyle.li}>Supplying our products and services to you.</li>
                            <li className={privacyStyle.li}>Profile information & behaviours, Audit Information and Crash reporting data</li>
                            <li className={privacyStyle.li}>Personalising and tailoring our products and services for you.</li>
                            <li className={privacyStyle.li}>Communicating with you.</li>
                        </ul>
                        <h4 className={privacyStyle.h4}>What Data we Use</h4>
                        <ul>
                        <li className={privacyStyle.li}>Data from Social Media accounts, provided Email and Password, Data from NHS Login accounts
                            and Analytic information including Device ID and IP Address</li>
                        <li className={privacyStyle.li}>Consent: help maintain and improvement of the app.</li>
                        <li className={privacyStyle.li}>Profile information, behaviours & preferences and Location Data</li>
                        <li className={privacyStyle.li}> Data from Social Media accounts , Data from NHS Login accounts</li>
                    </ul>

                        <h4 className={privacyStyle.h4}>our Lawful Basis</h4>
                        <ul>
                        <li className={privacyStyle.li}>Consent: Verifying your identity and keeping all data held within the app secure</li>
                        <li className={privacyStyle.li}>Consent: help maintain and improvement of the app.</li>
                        <li className={privacyStyle.li}>Consent: Product improvement and feedback, public health information</li>
                    </ul>


                        <div>With your permission and/or where permitted by law, we may also use your personal data for
                            marketing purposes, which may include contacting you by email or text message with information,
                            news, and offers on our products. You will not be sent any unlawful marketing or spam. We will
                            always work to fully protect your rights and comply with our obligations under the Data
                            Protection Legislation and the Privacy and Electronic Communications (EC Directive) Regulations
                            2003, and you will always have the opportunity to opt_out.</div>
                        <div>We will not share your personal data with third parties for marketing purposes.</div>
                        <div>We will only use your personal data for the purpose(s) for which it was originally collected
                            unless we reasonably believe that another purpose is compatible with that or those original
                            purpose(s) and need to use your personal data for that purpose. If we do use your personal data
                            in this way and you wish us to explain how the new purpose is compatible with the original,
                            please contact us using the details in Part 12.</div>
                        <div>If we need to use your personal data for a purpose that is unrelated to, or incompatible with,
                            the purpose(s) for which it was originally collected, we will inform you and explain the legal
                            basis which allows us to do so.</div>
                        <div>In some circumstances, where permitted or required by law, we may process your personal data
                            without your knowledge or consent. This will only be done within the bounds of the Data
                            Protection Legislation and your legal rights.</div>

                    </div>
                </div>
            </div>

            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_7" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_7" className={`${privacyStyle.lbl_toggle}`} tabindex="0">How Long Will You Keep My Personal Data?</label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>We will not keep your personal data for any longer than is necessary in light of the reason(s)
                            for which it was first collected. Your personal data will therefore be kept for the following
                            periods:</div>
                        <div className={`${privacyStyle.wrap_collabsible}`}>
                            <input id="collapsible3_7_1" className={`${privacyStyle.toggle}`} type="checkbox" />
                            <label for="collapsible3_7_1" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Sensitive and personal data
                                including all medical information, name, email, NHS number, telephone number, profile and
                                analytic data</label>
                            <div className={`${privacyStyle.collapsible_content }`}>
                                <div className={`${privacyStyle.content_inner}`}>
                                    <div><b className={privacyStyle.b}>Type of Data: </b>Sensitive and personal data including all medical information,
                                        name, email, NHS number, telephone number, profile and analytic data</div>
                                    <div><b className={privacyStyle.b}>How Long we Keep It : </b>
                                    <div>18months + 3days from last successful login.
                                        (+1 month for backups to be cycled)</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={`${privacyStyle.wrap_collabsible}`}>
                            <input id="collapsible3_7_2" className={`${privacyStyle.toggle}`} type="checkbox" />
                            <label for="collapsible3_7_2" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Non_Personal data including
                                profile information. audit and crash reporting data</label>
                            <div className={`${privacyStyle.collapsible_content }`}>
                                <div className={`${privacyStyle.content_inner}`}>
                                    <div><b className={privacyStyle.b}>Type of Data: </b>Non_Personal data including profile information. audit and crash
                                        reporting data</div>
                                    <div><b className={privacyStyle.b}>How Long we Keep It : </b>
                                    <div>18months + 3days from last successful login.
                                        (+1 month for backups to be cycled)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_8" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_8" className={`${privacyStyle.lbl_toggle}`} tabindex="0">How and Where Do You Store or Transfer My
                    Personal Data?</label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>We will only store your personal data within the UK. Your data is stored encrypted (AES_256)
                            within a secure cloud datastore. Data in transit is encrypted using HTTPS (TLS 1.2) and on your
                            device sensitive data is encrypted using the devices passcode or biometrics (AES_256).</div>
                    </div>
                </div>
            </div>

            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_9" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_9" className={`${privacyStyle.lbl_toggle}`} tabindex="0">Do You Share My Personal Data?</label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>We do not share your data in ways not described in this policy. In order to deliver our platform
                            we use a limited number of 3rd party data processors. These 3rd party processors are themselves
                            compliant with GDPR.</div>



                        <div className={`${privacyStyle.wrap_collabsible}`}>
                            <input id="collapsible3_9_1" className={`${privacyStyle.toggle}`} type="checkbox" />
                            <label for="collapsible3_9_1" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Google Cloud Platform</label>
                            <div className={`${privacyStyle.collapsible_content }`}>
                                <div className={`${privacyStyle.content_inner}`}>
                                    <div><b className={privacyStyle.b}>3rd Party Processor: </b>Google Cloud Platform</div>
                                    <div><b className={privacyStyle.b}>Required Or Optional : </b>Required</div>
                                    <div><b className={privacyStyle.b}>Data Shared: </b>All platform data is hosted within a secure cloud database. All
                                        data is encrypted at rest.</div>
                                    <div><b className={privacyStyle.b}>Purpose : </b>To provide a stable and secure architecture to our platform.</div>
                                    <div><b className={privacyStyle.b}>GDPR Compliance: </b><a
                                            href="https://cloud.google.com/security">https://cloud.google.com/security</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${privacyStyle.wrap_collabsible} ${privacyStyle.top_o}`}>
                            <input id="collapsible3_9_2" className={`${privacyStyle.toggle}`} type="checkbox" />
                            <label for="collapsible3_9_2" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Google Analytics</label>
                            <div className={`${privacyStyle.collapsible_content }`}>
                                <div className={`${privacyStyle.content_inner}`}>
                                    <div><b className={privacyStyle.b}>3rd Party Processor: </b>Google Analytics</div>
                                    <div><b className={privacyStyle.b}>Required Or Optional : </b>Optional.</div>
                                    <div><b className={privacyStyle.b}>Data Shared: </b>Non_identifiable activity within our platform. </div>
                                    <div><b className={privacyStyle.b}>Purpose :</b>Analytics to improve the platform. </div>
                                    <div><b className={privacyStyle.b}>GDPR Compliance: </b><a
                                            href="https://support.google.com/analytics/answer/9019185?hl=en">https://support.google.com/analytics/answer/9019185?hl=en</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={`${privacyStyle.wrap_collabsible} ${privacyStyle.top_o}`}>
                            <input id="collapsible3_9_3" className={`${privacyStyle.toggle}`} type="checkbox" />
                            <label for="collapsible3_9_3" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Intercom</label>
                            <div className={`${privacyStyle.collapsible_content}`}>
                                <div className={`${privacyStyle.content_inner}`}>
                                    <div><b className={privacyStyle.b}>3rd Party Processor: </b>Intercom</div>
                                    <div><b className={privacyStyle.b}>Required Or Optional : </b>Optional</div>
                                    <div><b className={privacyStyle.b}>Data Shared:</b> Name and Emai</div>
                                    <div><b className={privacyStyle.b}>Purpose:</b> For Support </div>
                                    <div><b className={privacyStyle.b}>GDPR Compliance: </b><a
                                            href="https://www.intercom.com/security">https://www.intercom.com/security</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={`${privacyStyle.wrap_collabsible} ${privacyStyle.top_o}`}>
                            <input id="collapsible3_9_4" className={`${privacyStyle.toggle}`} type="checkbox" /> 
                            <label for="collapsible3_9_4" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Gleap</label>
                            <div className={`${privacyStyle.collapsible_content}`}>
                                <div className={`${privacyStyle.content_inner}`}>
                                    <div><b className={privacyStyle.b}>3rd Party Processor: </b>Gleap</div>
                                    <div><b className={privacyStyle.b}>Required Or Optional : </b>Optional</div>
                                    <div><b className={privacyStyle.b}>Data Shared: </b>Name and Email </div>
                                    <div><b className={privacyStyle.b}>Purpose: </b>For Bug Tracking</div>
                                    <div><b className={privacyStyle.b}>GDPR Compliance: </b><a
                                            href="https://gleap.io/docs/Privacy/">https://gleap.io/docs/Privacy/</a> </div>
                                </div>
                            </div>
                        </div>


                        <div className={`${privacyStyle.wrap_collabsible} ${privacyStyle.top_o}`}>
                            <input id="collapsible3_9_5" className={`${privacyStyle.toggle}`} type="checkbox" />
                            <label for="collapsible3_9_5" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Encharge</label>
                            <div className={`${privacyStyle.collapsible_content }`}>
                                <div className={`${privacyStyle.content_inner}`}>
                                    <div><b className={privacyStyle.b}>3rd Party Processor: </b>Encharge</div>
                                    <div><b className={privacyStyle.b}>Required Or Optional : </b>Optional</div>
                                    <div><b className={privacyStyle.b}>Data Shared: </b>Name and Email</div>
                                    <div><b className={privacyStyle.b}>Purpose: </b>For Marketing Emails</div>
                                    <div><b className={privacyStyle.b}>GDPR Compliance: </b><a
                                            href="https://encharge.io/privacy_policy/">https://encharge.io/privacy_policy/</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>Where your personal data is shared with a third party, as described above, we will take steps to
                            ensure that your personal data is handled safely, securely, and in accordance with your rights,
                            our obligations, and the third party’s obligations under the law, as described above in Part 8.
                        </div>
                        <div>If we sell, transfer, or merge parts of our business or assets, your personal data may be
                            transferred to a third party. Any new owner of our business may continue to use your personal
                            data in the same way(s) that we have used it, as specified in this Privacy Policy.</div>
                        <div>In some limited circumstances, we may be legally required to share certain personal data, which
                            might include yours, if we are involved in legal proceedings or complying with legal
                            obligations, a court order, or the instructions of a government authority.</div>
                        <br />
                        <h4 className={privacyStyle.h4}>Non Identifiable Data Sharing</h4>
                        <div>We may share aggregated (non_identifiable) data with Health & Research Organisations to help
                            evaluate the value of this serv ice.</div>
                        <div>We also reserve the right to publish aggregated data about our service; taking necessary measures
                            to preserve anonymity (such as k_anonymity – minimum size of 7 for participants for inclusion in
                            reports).</div>
                        <br />
                        <div className={`${privacyStyle.wrap_collabsible} ${privacyStyle.top_o}`}>
                            <input id="collapsible3_10_1" className={`${privacyStyle.toggle}`} type="checkbox" /> 
                            <label for="collapsible3_10_1" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">NHS Bodies including: ICS’s,
                                PCN’s, Hospital Trusts, NHS England, NHS Digital</label>
                            <div className={`${privacyStyle.collapsible_content }`}>
                                <div className={`${privacyStyle.content_inner}`}>
                                    <div><b className={privacyStyle.b}>Recipient: </b>NHS Bodies including: ICS’s, PCN’s, Hospital Trusts, NHS England,
                                        NHS Digital </div>
                                    <div><b className={privacyStyle.b}>Activity Carried Out : </b>Sharing of anonymised data such as usage statistics and
                                        outcome measures such</div>
                                    <div><b className={privacyStyle.b}>Sector: </b>Health</div>
                                    <div><b className={privacyStyle.b}>Location: </b>England</div>
                                </div>
                            </div>
                        </div>

                        <div className={`${privacyStyle.wrap_collabsible}`}>
                            <input id="collapsible3_10_2" className={`${privacyStyle.toggle}`} type="checkbox" /> 
                            <label for="collapsible3_10_2" className={`${privacyStyle.sub_lbl_toggle}`} tabindex="0">Academic Health Science Networks
                                (AHSNs)</label>
                            <div className={`${privacyStyle.collapsible_content }`}>
                                <div className={`${privacyStyle.content_inner}`}>
                                    <div><b className={privacyStyle.b}>Recipient: </b>Academic Health Science Networks (AHSNs)</div>
                                    <div><b className={privacyStyle.b}>Activity Carried Out : </b>patient activation & quality of life measures.</div>
                                    <div><b className={privacyStyle.b}>Sector: </b>Care</div>
                                    <div><b className={privacyStyle.b}>Location: </b></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_11" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_11" className={`${privacyStyle.lbl_toggle}`} tabindex="0">How Can I Access My Personal Data? </label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>If you want to know what personal data we have about you, you can ask us for details of that
                            personal data and for a copy of it (where any such personal data is held). This is known as a
                            “subject access request”.</div>
                        <div>All subject access requests should be made in writing and sent to the email or postal addresses
                            shown in Part 12.</div>
                        <div>There is not normally any charge for a subject access request. If your request is ‘manifestly
                            unfounded or excessive’ (for example, if you make repetitive requests) a fee may be charged to
                            cover our administrative costs in responding.</div>
                        <div>We will respond to your subject access request within two weeks and, in any case, not more than
                            one month of receiving it. Normally, we aim to provide a complete response, including a copy of
                            your personal data within that time. In some cases, however, particularly if your request is
                            more complex, more time may be required up to a maximum of three months from the date we receive
                            your request. You will be kept fully informed of our progress.</div>
                    </div>
                </div>
            </div>

            <div className={`${privacyStyle.wrap_collabsible}`}>
                <input id="collapsible3_12" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_12" className={`${privacyStyle.lbl_toggle}`} tabindex="0">How May Parents Access, Change or Delete
                    Information About Their Children? </label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>If you are a parent, and we need your consent to certain processing of your Children’s personal
                            information, if you:</div>
                        <ul>
                            <li className={privacyStyle.li}>wish us to cease further collection of personal information from your Children;
                            </li>
                            <li className={privacyStyle.li}> believe your Children are participating in an activity on the App that uses their personal
                                information without the parental consent required by law;
                                </li>
                            <li className={privacyStyle.li}> wish us to make no further use of, or delete, the personal information we have collected
                                online from your Children; and/or</li>
                            <li className={privacyStyle.li}> no longer wish for your Children to participate as registered users of the App,</li>
                        </ul>
                        <div>we will delete your Child’s Profile, and any contact information we may hold, on request using
                            the contact details in part 12.</div>
                        <div>For your Child’s protection, we may need to verify your identity before implementing any request.
                            We will try to comply with your request as soon as reasonably practicable.</div>
                    </div>
                </div>
            </div>

            <div className={`${privacyStyle.wrap_collabsible}`}>
                    <input id="collapsible3_13" className={`${privacyStyle.toggle}`} type="checkbox" />
                    <label for="collapsible3_13" className={`${privacyStyle.lbl_toggle}`} tabindex="0"> How Do I Contact You? </label>
                    <div className={`${privacyStyle.collapsible_content}`}>
                        <div className={`${privacyStyle.content_inner}`}>
                            <div>To contact us about anything to do with your personal data and data protection, including to make
                                a subject access request or to ask us anything about this privacy policy, please use the
                                following details:</div>
                            <div><b className={privacyStyle.b}>Address:</b> Canterbury House, 1 Royal St, Lambeth, London SE1 7LL</div>
                            <div><b className={privacyStyle.b}>Email address:</b> support@tinymedicalapps.com</div>
                            <div><b className={privacyStyle.b}>Telephone number:</b> 0207 859 4169.</div>
                        </div>
                    </div>
                </div><div className={`${privacyStyle.wrap_collabsible}`}>
                        <input id="collapsible3_14" className={`${privacyStyle.toggle}`} type="checkbox" />
                        <label for="collapsible3_14" className={`${privacyStyle.lbl_toggle}`} tabindex="0"> NHS Login</label>
                        <div className={`${privacyStyle.collapsible_content}`}>
                            <div className={`${privacyStyle.content_inner}`}>
                                <div>Please note that if you access our service using your NHS login details, the identity
                                    verification services are managed by NHS Digital. NHS Digital is the controller for any personal
                                    information you provide to NHS Digital to get an NHS login account and verify your identity, and
                                    uses that personal information solely for that single purpose. For this personal information,
                                    our role is a “processor” only and we must act under the instructions provided by NHS Digital
                                    (as the “controller”) when verifying your identity. To see NHS Digital’s Privacy Notice and
                                    Terms and Conditions, please use these links: https://access.login.nhs.uk/terms_and_conditions
                                    /https://access.login.nhs.uk/privacy. This restriction does not apply to the personal
                                    information you provide to us separately.</div>
                            </div>
                        </div>
                    </div><div className={`${privacyStyle.wrap_collabsible} `}>
                <input id="collapsible3_15" className={`${privacyStyle.toggle}`} type="checkbox" />
                <label for="collapsible3_15" className={`${privacyStyle.lbl_toggle}`} tabindex="0">Changes to this Privacy Notice</label>
                <div className={`${privacyStyle.collapsible_content}`}>
                    <div className={`${privacyStyle.content_inner}`}>
                        <div>We may change this Privacy Notice from time to time. This may be necessary, for example, if the
                            law changes, or if we change our business in a way that affects personal data protection.</div>
                        <div>Any changes will be made available at <a
                                href="http://digitalhealthpassport.co">http://digitalhealthpassport.co</a></div>
                        <div><b className={privacyStyle.b}>This Privacy Notice is Version v1.11 – 26/04/2023</b></div>
                    </div>
                </div>
            </div>


        </div>

)}

export default privacy
