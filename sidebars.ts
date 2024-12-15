import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  angularSidebar: [
    {
      'Introduction': ['angular/introduction/intro', 'angular/introduction/package_info', 'angular/introduction/package_versions','angular/introduction/whats_new', 'angular/introduction/best_use', 'react/introduction/other_information'],
    },
    'angular/installation/install',
    {
      'API': ['angular/api/input_props', 'angular/api/output_props', 'angular/api/using_module', 'angular/api/class_style', 'angular/api/aria', 'angular/api/spinner'],
    },
    'angular/examples/stackblitz',
    'angular/others/others'
  ],
  reactSidebar: [
    {
      'Introduction': ['react/introduction/intro', 'react/introduction/package_info', 'react/introduction/package_versions', 'react/introduction/whats_new', 'react/introduction/other_information'],
    },
    'react/installation/install',
    {
      'API': ['react/api/props', 'react/api/using_module', 'react/api/class_style', 'react/api/aria'],
    },
    'react/examples/stackblitz',
    'react/others/others'
  ]

  // But you can create a sidebar manually
  
  // tutorialSidebar: [
  //   'intro',
  //   'hello',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],
   
};

export default sidebars;
