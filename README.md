# 🎨 VNUI Component Library

A modern, fully responsive Vue 3 component library with TypeScript support. Built for developers who need beautiful, customizable UI components that work seamlessly across all devices.

[![npm version](https://img.shields.io/npm/v/vnui-component-library.svg)](https://www.npmjs.com/package/vnui-component-library)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/vnui-component-library)](https://bundlephobia.com/package/vnui-component-library)
[![License](https://img.shields.io/npm/l/vnui-component-library.svg)](https://github.com/yourusername/vnui/blob/main/LICENSE)

## ✨ Features

- 🚀 **32 Components** - Complete UI component collection
- 💪 **TypeScript** - Full type safety with TypeScript definitions
- 📱 **Fully Responsive** - Mobile-first design, works on all screen sizes
- 🎨 **Highly Customizable** - Extensive props, slots, and styling options
- ⚡ **Lightweight** - Optimized bundle size (~42KB gzipped)
- 🔧 **Tree-shakeable** - Import only what you need
- 🎯 **Accessible** - ARIA-compliant components
- 🌈 **Modern Design** - Beautiful default styling with smooth animations

## 📦 Installation

```bash
npm install vnui-component-library
# or
pnpm add vnui-component-library
# or
yarn add vnui-component-library
```

## 🚀 Quick Start

```vue
<script setup>
import { VNButton, VNInput, VNCard } from 'vnui-component-library'
import 'vnui-component-library/dist/style.css'
</script>

<template>
  <VNCard :hoverable="true" :shadow="true">
    <template #header>
      <h3>Login Form</h3>
    </template>
    
    <VNInput placeholder="Username" />
    <VNInput type="password" placeholder="Password" />
    
    <template #footer>
      <VNButton variant="primary">Login</VNButton>
    </template>
  </VNCard>
</template>
```

## 📚 Components

### Layout Components (9)

#### VNFlex
Flexible box layout with responsive utilities.

```vue
<VNFlex direction="row" justify="space-between" align="center" gap="20px">
  <VNButton>Left</VNButton>
  <VNButton>Right</VNButton>
</VNFlex>

<!-- Responsive visibility -->
<VNFlex hideOn="md">Hidden on mobile</VNFlex>
<VNFlex showOn="xl">Desktop only</VNFlex>
```

**Props:** `direction`, `justify`, `align`, `wrap`, `gap`, `inline`, `hideOn`, `showOn`

#### VNGrid
CSS Grid layout system.

```vue
<VNGrid columns="3" gap="20px">
  <VNCard>Item 1</VNCard>
  <VNCard>Item 2</VNCard>
  <VNCard>Item 3</VNCard>
</VNGrid>
```

**Props:** `cols`, `rows`, `gap`, `rowGap`, `colGap`, `autoFlow`

#### VNContainer
Responsive container with max-width.

```vue
<VNContainer maxWidth="lg" :centered="true">
  <p>Centered content with max-width</p>
</VNContainer>
```

**Props:** `fluid`, `maxWidth`, `padding`, `centered`

#### VNLayout, VNLayoutHeader, VNLayoutSidebar, VNLayoutContent, VNLayoutFooter
Complete page layout system.

```vue
<VNLayout>
  <VNLayoutHeader>Header</VNLayoutHeader>
  <VNLayout>
    <VNLayoutSidebar>Sidebar</VNLayoutSidebar>
    <VNLayoutContent>Main Content</VNLayoutContent>
  </VNLayout>
  <VNLayoutFooter>Footer</VNLayoutFooter>
</VNLayout>
```

### Form Components (4)

#### VNButton
Button with multiple variants and sizes.

```vue
<VNButton variant="primary">Primary</VNButton>
<VNButton variant="edit">Edit</VNButton>
<VNButton variant="delete">Delete</VNButton>
<VNButton variant="outline">Outline</VNButton>
<VNButton size="large">Large Button</VNButton>
<VNButton :disabled="true">Disabled</VNButton>
```

**Props:** `variant`, `size`, `disabled`, `loading`, `icon`, `bgColor`, `textColor`, `hoverBgColor`

#### VNInput
Text input with variants and slots.

```vue
<VNInput placeholder="Enter text" />
<VNInput variant="outline" />
<VNInput variant="filled" />
<VNInput type="password" />

<!-- With prefix/suffix -->
<VNInput placeholder="Search">
  <template #prefix>🔍</template>
  <template #suffix>✕</template>
</VNInput>
```

**Props:** `variant`, `size`, `type`, `placeholder`, `disabled`, `error`, `success`

#### VNForm, VNFormItem
Form wrapper with validation support.

```vue
<VNForm @submit="handleSubmit">
  <VNFormItem label="Username" :required="true">
    <VNInput v-model="username" />
  </VNFormItem>
  <VNFormItem label="Email" :required="true">
    <VNInput v-model="email" type="email" />
  </VNFormItem>
  <VNButton type="submit">Submit</VNButton>
</VNForm>
```

### Data Display (10)

#### VNCard
Content card with header and footer slots.

```vue
<VNCard :hoverable="true" :shadow="true">
  <template #header>
    <VNText weight="bold">Card Title</VNText>
  </template>
  
  Card content goes here
  
  <template #footer>
    <VNButton variant="primary">Action</VNButton>
  </template>
</VNCard>
```

**Props:** `hoverable`, `shadow`, `bordered`, `elevated`

#### VNTable
Data table with custom cell rendering.

```vue
<VNTable 
  :columns="columns" 
  :data="data" 
  :striped="true" 
  :hoverable="true"
>
  <template #cell-actions="{ row }">
    <VNButton size="tiny" @click="edit(row)">Edit</VNButton>
  </template>
</VNTable>
```

**Props:** `columns`, `data`, `striped`, `bordered`, `hoverable`, `size`, `loading`

#### VNList
List display with icons and metadata.

```vue
<VNList :items="items" :bordered="true" :hoverable="true" />

<!-- Custom item rendering -->
<VNList :items="items">
  <template #item="{ item }">
    <VNFlex align="center" gap="10px">
      <VNAvatar :text="item.name" />
      <VNText>{{ item.name }}</VNText>
    </VNFlex>
  </template>
</VNList>
```

**Props:** `items`, `bordered`, `hoverable`, `size`, `split`

#### VNText
Typography component.

```vue
<VNText tag="h1" size="large" weight="bold">Heading</VNText>
<VNText tag="p" size="medium">Paragraph text</VNText>
<VNText color="#667eea">Colored text</VNText>
```

**Props:** `tag`, `size`, `weight`, `variant`, `color`

#### VNAvatar
User avatar with fallback.

```vue
<VNAvatar src="/avatar.jpg" size="large" />
<VNAvatar text="John Doe" size="medium" />
<VNAvatar icon="👤" shape="square" />
```

**Props:** `src`, `alt`, `size`, `shape`, `icon`, `text`, `color`, `bgColor`

#### VNBadge
Badge/counter indicator.

```vue
<VNBadge :count="5">
  <VNButton>Messages</VNButton>
</VNBadge>

<VNBadge :count="99" :max="99" variant="danger">
  <VNButton>Notifications</VNButton>
</VNBadge>

<VNBadge :dot="true" variant="success">
  <VNButton>Online</VNButton>
</VNBadge>
```

**Props:** `variant`, `size`, `dot`, `count`, `max`, `showZero`

#### VNTag
Tag/label component.

```vue
<VNTag variant="primary">Primary</VNTag>
<VNTag variant="success">Success</VNTag>
<VNTag :closable="true" @close="handleClose">Closable</VNTag>
<VNTag :bordered="true">Bordered</VNTag>
```

**Props:** `variant`, `size`, `closable`, `color`, `bgColor`, `bordered`

#### VNDivider
Content divider.

```vue
<VNDivider />
<VNDivider>Text in middle</VNDivider>
<VNDivider orientation="vertical" />
<VNDivider :dashed="true" />
```

**Props:** `orientation`, `align`, `dashed`, `color`, `thickness`, `margin`

#### VNImage
Image component with lazy loading and preview.

```vue
<VNImage 
  src="/image.jpg" 
  alt="Description"
  :preview="true"
  :lazy="true"
  width="200"
  height="200"
  fit="cover"
  radius="8px"
/>

<!-- Custom loading/error -->
<VNImage src="/image.jpg">
  <template #loading>Loading...</template>
  <template #error>Failed to load</template>
</VNImage>
```

**Props:** `src`, `alt`, `width`, `height`, `fit`, `lazy`, `preview`, `radius`, `fallback`

#### VNComment
Comment/discussion component.

```vue
<VNComment
  author="John Doe"
  avatar="/avatar.jpg"
  content="This is a comment"
  datetime="2 hours ago"
  :actions="['Like', 'Reply']"
  @action="handleAction"
/>

<!-- Nested comments -->
<VNComment author="User 1" content="Parent">
  <template #nested>
    <VNComment author="User 2" content="Reply" />
  </template>
</VNComment>
```

**Props:** `author`, `avatar`, `content`, `datetime`, `actions`

### Navigation (5)

#### VNNavbar, VNNavbarItem
Navigation bar components.

```vue
<VNNavbar>
  <VNNavbarItem>Home</VNNavbarItem>
  <VNNavbarItem>About</VNNavbarItem>
  <VNNavbarItem>Contact</VNNavbarItem>
</VNNavbar>
```

#### VNNavItem
Standalone navigation item.

```vue
<VNNavItem label="Home" :active="true" />
<VNNavItem label="About" href="/about" />
<VNNavItem label="Disabled" :disabled="true" />
```

**Props:** `label`, `active`, `disabled`, `href`

#### VNSidebar, VNSidebarItem
Sidebar menu components.

```vue
<VNSidebar>
  <VNSidebarItem icon="🏠">Dashboard</VNSidebarItem>
  <VNSidebarItem icon="⚙️" badge="3">Settings</VNSidebarItem>
</VNSidebar>
```

### Feedback (4)

#### VNModal
Modal dialog.

```vue
<VNButton @click="showModal = true">Open Modal</VNButton>

<VNModal v-model="showModal" title="Modal Title" size="medium">
  <p>Modal content</p>
  <template #footer>
    <VNButton @click="showModal = false">Close</VNButton>
    <VNButton variant="primary">Confirm</VNButton>
  </template>
</VNModal>
```

**Props:** `modelValue`, `title`, `size`, `closable`, `maskClosable`

#### VNAlert
Alert message.

```vue
<VNAlert type="success" title="Success!" :closable="true">
  Operation completed successfully.
</VNAlert>

<VNAlert type="warning" :showIcon="true">
  Please check your input.
</VNAlert>
```

**Props:** `type`, `title`, `closable`, `showIcon`, `bordered`

#### VNNotification
Notification popup.

```vue
<VNNotification 
  type="success"
  title="Success!"
  message="Your action was completed"
  :duration="4500"
  position="top-right"
/>
```

**Props:** `type`, `title`, `message`, `duration`, `closable`, `position`

#### VNToast
Toast message.

```vue
<VNToast 
  type="info"
  message="This is a toast message"
  :duration="3000"
  position="center"
/>
```

**Props:** `type`, `message`, `duration`, `position`

### Utilities (1)

#### VNResponsive
Responsive visibility control.

```vue
<VNResponsive hideOn="md">
  <VNButton>Hidden on tablet and below</VNButton>
</VNResponsive>

<VNResponsive showOn="xs">
  <VNButton>Mobile only</VNButton>
</VNResponsive>
```

**Props:** `hideOn`, `showOn`

## 🎨 Theming

All components support custom styling:

```vue
<VNButton 
  bgColor="#custom-color"
  textColor="#ffffff"
  :hoverBgColor="#hover-color"
>
  Custom Styled Button
</VNButton>
```

## 📱 Responsive Design

**Breakpoints:**
- `xs`: < 480px (Mobile small)
- `sm`: < 640px (Mobile)
- `md`: < 768px (Tablet small)
- `lg`: < 1024px (Tablet)
- `xl`: < 1280px (Desktop small)

All components are fully responsive and mobile-friendly with:
- Automatic layout adjustments
- Touch-friendly interactions
- Optimized spacing for small screens

## 🔧 TypeScript Support

Full TypeScript support with exported types:

```typescript
import type { 
  ButtonProps, 
  InputProps, 
  CardProps,
  TableColumn,
  ListItem 
} from 'vnui-component-library'
```

## 📦 Bundle Size

- **CSS**: 32.77 kB (gzip: 6.00 kB)
- **ES Module**: 42.30 kB (gzip: 9.17 kB)
- **UMD**: 35.38 kB (gzip: 8.10 kB)

## 🌟 Examples

### Complete Form

```vue
<VNCard :shadow="true">
  <template #header>
    <VNText tag="h2" weight="bold">User Registration</VNText>
  </template>
  
  <VNForm @submit="handleSubmit">
    <VNFormItem label="Full Name" :required="true">
      <VNInput v-model="form.name" placeholder="John Doe" />
    </VNFormItem>
    
    <VNFormItem label="Email" :required="true">
      <VNInput v-model="form.email" type="email" />
    </VNFormItem>
    
    <VNFormItem label="Password" :required="true">
      <VNInput v-model="form.password" type="password" />
    </VNFormItem>
    
    <VNFlex justify="flex-end" gap="10px">
      <VNButton variant="outline">Cancel</VNButton>
      <VNButton variant="primary" type="submit">Register</VNButton>
    </VNFlex>
  </VNForm>
</VNCard>
```

### Dashboard Layout

```vue
<VNLayout>
  <VNLayoutHeader>
    <VNNavbar>
      <VNNavbarItem>Dashboard</VNNavbarItem>
      <VNNavbarItem>Analytics</VNNavbarItem>
    </VNNavbar>
  </VNLayoutHeader>
  
  <VNLayout>
    <VNLayoutSidebar>
      <VNSidebar>
        <VNSidebarItem icon="🏠">Home</VNSidebarItem>
        <VNSidebarItem icon="📊" badge="5">Reports</VNSidebarItem>
      </VNSidebar>
    </VNLayoutSidebar>
    
    <VNLayoutContent>
      <VNGrid columns="3" gap="20px">
        <VNCard :hoverable="true">
          <VNText weight="bold">Total Users</VNText>
          <VNText size="large">1,234</VNText>
        </VNCard>
        <!-- More cards -->
      </VNGrid>
    </VNLayoutContent>
  </VNLayout>
</VNLayout>
```

## 📄 License

MIT License - feel free to use in personal and commercial projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

- 📧 Email: support@vnui.dev
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/vnui/issues)
- 📖 Docs: [Documentation](https://vnui.dev/docs)

---

Made with ❤️ using Vue 3 + TypeScript
