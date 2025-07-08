import MDXComponents from '@theme-original/MDXComponents';
import CodeBlock from '@theme-original/CodeBlock';
import Details from '@theme-original/Details';
import Tabs from '@theme-original/Tabs';
import TabItem from '@theme-original/TabItem';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Details: Details,
  CodeBlock: CodeBlock,
  Tabs: Tabs,
  TabItem: TabItem,
  Admonition: MDXComponents.admonition,
};
