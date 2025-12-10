<script setup lang="ts">
import { ref } from 'vue'
import VNButton from './components/Button/button.vue'
import VNInput from './components/Input/input.vue'
import VNText from './components/Text/text.vue'
import VNModal from './components/Modal/modal.vue'
import VNForm from './components/Form/form.vue'
import VNFormItem from './components/Form/form-item.vue'
import VNLayoutHeader from './components/Layout/layout-header.vue'
import VNLayoutSidebar from './components/Layout/layout-sidebar.vue'
import VNLayoutContent from './components/Layout/layout-content.vue'
import VNLayoutFooter from './components/Layout/layout-footer.vue'
import VNSidebar from './components/Sidebar/sidebar.vue'
import VNSidebarItem from './components/Sidebar/sidebar-item.vue'
import VNFlex from './components/Flex/flex.vue'
import VNGrid from './components/Grid/grid.vue'
import VNCard from './components/Card/card.vue'
import VNTable from './components/Table/table.vue'
import VNList from './components/List/list.vue'
import VNContainer from './components/Container/container.vue'
import VNResponsive from './components/Responsive/responsive.vue'
import VNBadge from './components/Badge/badge.vue'
import VNAvatar from './components/Avatar/avatar.vue'
import VNDivider from './components/Divider/divider.vue'
import VNTag from './components/Tag/tag.vue'
import VNAlert from './components/Alert/alert.vue'
import VNNotification from './components/Notification/notification.vue'
import VNToast from './components/Toast/toast.vue'
import VNNavItem from './components/NavItem/nav-item.vue'
import VNImage from "./components/Image/image.vue"
const showModal = ref(false)
const showSidebar = ref(false)
const showNotification = ref(false)
const showToast = ref(false)
const toastKey = ref(0)
const notificationKey = ref(0)

const formData = ref({
  username: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
}

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const triggerNotification = () => {
  notificationKey.value++
  showNotification.value = true
}

const triggerToast = () => {
  toastKey.value++
  showToast.value = true
}

// Table data
const tableColumns = [
  { key: 'id', label: 'ID', width: '80px', align: 'center' as const },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role', align: 'center' as const },
  { key: 'actions', label: 'Actions', align: 'center' as const, width: '200px' }
]

const tableData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'Active' }
]

// List data
const listItems = [
  { id: 1, icon: '📧', title: 'New message from John', description: 'Hey, how are you doing?', meta: '2 min ago' },
  { id: 2, icon: '🔔', title: 'System update available', description: 'Version 2.0 is ready to install', meta: '1 hour ago' },
  { id: 3, icon: '✅', title: 'Task completed', description: 'Your report has been generated', meta: '3 hours ago' },
  { id: 4, icon: '⚠️', title: 'Warning', description: 'Disk space is running low', meta: '1 day ago' }
]
</script>

<template>
  <VNFlex direction="column" style="height: 100vh; width: 100%; overflow: hidden;">
    <VNLayoutHeader
      style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 0; flex-shrink: 0; width: 100%;">
      <VNFlex justify="space-between" align="center" style="padding: 0 20px; height: 100%; width: 100%;">
        <!-- Left: Logo + Mobile Menu -->
        <VNFlex align="center" gap="15px" style="flex-shrink: 0; width: auto;">
          <VNButton variant="none" size="small" @click="toggleSidebar" class="mobile-menu-btn"
            style="color: white; padding: 8px; font-size: 20px;">
            ☰
          </VNButton>
          <VNText style="color: white; font-size: 20px; font-weight: bold; white-space: nowrap;">🎨 VNUI</VNText>
        </VNFlex>

        <!-- Center: Menu List -->
        <VNFlex gap="30px" align="center" class="header-menu" style="flex: 1; justify-content: center; width: auto;">
          <VNNavItem label="Components" />
          <VNNavItem label="Documentation" />
          <VNNavItem label="Examples" />
        </VNFlex>

        <!-- Right: Button -->
        <VNFlex gap="15px" align="center" style="flex-shrink: 0; width: auto;">
          <VNButton variant="outline" size="small"
            style="color: white; border-color: white; display: flex; align-items: center; gap: 6px;">
            <VNImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4XSQgxkZJwKtSsIZbTNwFxdA_SAtdaA3gLRJU-8EZuuTFj19V28gkK8UXSrWWq3bGE7GsVymHTaSqxmcF6I_qky_ALQCK05PxXniLcq_&s=10" :preview="true" width="200" height="200" fit="cover" radius="8px" />

            <span class="btn-text">GitHub</span>
          </VNButton>
          <VNButton variant="primary" size="small" style="white-space: nowrap;">
            Get Started
          </VNButton>
        </VNFlex>
      </VNFlex>
    </VNLayoutHeader>

    <!-- Mobile Overlay -->
    <div v-if="showSidebar" class="sidebar-overlay" @click="showSidebar = false"></div>

    <VNFlex direction="row" style="flex: 1; overflow: hidden; width: 100%; position: relative;">
      <!-- Sidebar -->
      <VNLayoutSidebar :class="['app-sidebar', { 'sidebar-open': showSidebar }]"
        style="background: #f8f9fa; padding: 20px; width: 250px; overflow-y: auto; flex-shrink: 0;">
        <VNSidebar>
          <VNSidebarItem icon="�">Dashboard</VNSidebarItem>
          <VNSidebarItem icon="🎨" badge="30">Components</VNSidebarItem>
          <VNSidebarItem icon="📚">Documentation</VNSidebarItem>
          <VNSidebarItem icon="⚙️">Settings</VNSidebarItem>
        </VNSidebar>
      </VNLayoutSidebar>

      <VNLayoutContent style="padding: 40px; background: #ffffff; flex: 1; overflow-y: auto;">
        <VNText tag="h1" size="large" weight="bold" style="margin-bottom: 10px;">
          Welcome to VNUI Component Library
        </VNText>
        <VNText size="medium" style="color: #666; margin-bottom: 40px;">
          A modern, customizable Vue 3 component library with TypeScript support
        </VNText>

        <!-- Buttons Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Buttons</VNText>
          </template>
          <VNFlex gap="15px" wrap="wrap">
            <VNButton variant="primary">Primary Button</VNButton>
            <VNButton variant="edit">Edit Button</VNButton>
            <VNButton variant="delete">Delete Button</VNButton>
            <VNButton variant="outline">Outline Button</VNButton>
            <VNButton variant="none">Text Button</VNButton>
          </VNFlex>
          <VNFlex gap="15px" wrap="wrap" style="margin-top: 15px;">
            <VNButton size="large" variant="primary">Large</VNButton>
            <VNButton size="normal" variant="primary">Normal</VNButton>
            <VNButton size="small" variant="primary">Small</VNButton>
            <VNButton size="tiny" variant="primary">Tiny</VNButton>
          </VNFlex>
        </VNCard>

        <!-- Inputs Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Inputs</VNText>
          </template>
          <VNGrid columns="2" gap="20px">
            <VNInput placeholder="Default input" />
            <VNInput placeholder="Outline input" variant="outline" />
            <VNInput placeholder="Filled input" variant="filled" />
            <VNInput placeholder="With prefix" variant="outline">
              <template #prefix>🔍</template>
            </VNInput>
          </VNGrid>
        </VNCard>

        <!-- Form Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Form</VNText>
          </template>
          <VNForm @submit="handleSubmit">
            <VNFormItem label="Username" :required="true">
              <VNInput v-model="formData.username" placeholder="Enter username" />
            </VNFormItem>
            <VNFormItem label="Email" :required="true">
              <VNInput v-model="formData.email" placeholder="Enter email" type="email" />
            </VNFormItem>
            <VNFormItem label="Password" :required="true">
              <VNInput v-model="formData.password" placeholder="Enter password" type="password" />
            </VNFormItem>
            <VNButton variant="primary" type="submit">Submit Form</VNButton>
          </VNForm>
        </VNCard>

        <!-- Grid & Flex Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Layout Components</VNText>
          </template>
          <VNText weight="bold" style="margin-bottom: 10px;">Grid Layout:</VNText>
          <VNGrid columns="3" gap="15px" style="margin-bottom: 20px;">
            <div style="background: #667eea; color: white; padding: 20px; border-radius: 8px; text-align: center;">Grid
              Item 1
            </div>
            <div style="background: #764ba2; color: white; padding: 20px; border-radius: 8px; text-align: center;">Grid
              Item 2
            </div>
            <div style="background: #f093fb; color: white; padding: 20px; border-radius: 8px; text-align: center;">Grid
              Item 3
            </div>
          </VNGrid>

          <VNText weight="bold" style="margin-bottom: 10px;">Flex Layout:</VNText>
          <VNFlex justify="space-between" align="center"
            style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <VNText>Left Content</VNText>
            <VNText>Center Content</VNText>
            <VNText>Right Content</VNText>
          </VNFlex>
        </VNCard>

        <!-- Cards Section -->
        <VNGrid columns="3" gap="20px" style="margin-bottom: 30px;">
          <VNCard :hoverable="true" :shadow="true">
            <template #header>
              <VNText weight="bold">Card with Shadow</VNText>
            </template>
            <VNText>This card has a shadow effect and hover animation.</VNText>
            <template #footer>
              <VNButton variant="primary" size="small">Action</VNButton>
            </template>
          </VNCard>

          <VNCard :hoverable="true" :bordered="true">
            <template #header>
              <VNText weight="bold">Bordered Card</VNText>
            </template>
            <VNText>This card has a border style.</VNText>
            <template #footer>
              <VNButton variant="edit" size="small">Edit</VNButton>
            </template>
          </VNCard>

          <VNCard :hoverable="true" :shadow="true">
            <template #header>
              <VNText weight="bold">Another Card</VNText>
            </template>
            <VNText>Cards are versatile components.</VNText>
            <template #footer>
              <VNButton variant="delete" size="small">Delete</VNButton>
            </template>
          </VNCard>
        </VNGrid>

        <!-- Table Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Table</VNText>
          </template>
          <VNTable :columns="tableColumns" :data="tableData" :striped="true" :hoverable="true">
            <template #cell-actions="{ row }">
              <VNFlex gap="8px" justify="center">
                <VNButton :variant="row.status === 'Active' ? 'primary' : 'outline'" size="tiny">
                  {{ row.status }}
                </VNButton>
                <VNButton variant="edit" size="tiny">Edit</VNButton>
                <VNButton variant="delete" size="tiny">Delete</VNButton>
              </VNFlex>
            </template>
          </VNTable>
        </VNCard>

        <!-- List Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">List</VNText>
          </template>
          <VNList :items="listItems" :bordered="true" :hoverable="true" />
        </VNCard>

        <!-- Responsive Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Responsive & Container</VNText>
          </template>

          <VNText weight="bold" style="margin-bottom: 10px;">Container with max-width:</VNText>
          <VNContainer maxWidth="md" style="background: #f8f9fa; padding: 20px; margin-bottom: 20px;">
            <VNText>This content is inside a Container with max-width="md"</VNText>
          </VNContainer>

          <VNText weight="bold" style="margin-bottom: 10px;">Responsive visibility (resize window):</VNText>
          <VNFlex gap="10px" wrap="wrap">
            <VNResponsive hideOn="md">
              <VNButton variant="primary" size="small">Hidden on MD+</VNButton>
            </VNResponsive>
            <VNResponsive showOn="md">
              <VNButton variant="edit" size="small">Show only on MD</VNButton>
            </VNResponsive>
            <VNResponsive hideOn="sm">
              <VNButton variant="delete" size="small">Hidden on SM+</VNButton>
            </VNResponsive>
          </VNFlex>
        </VNCard>

        <!-- Badge & Avatar Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Badge & Avatar</VNText>
          </template>

          <VNText weight="bold" style="margin-bottom: 10px;">Badges:</VNText>
          <VNFlex gap="20px" wrap="wrap" style="margin-bottom: 20px;">
            <VNBadge :count="5">
              <VNButton variant="outline">Messages</VNButton>
            </VNBadge>
            <VNBadge :count="99" variant="danger">
              <VNButton variant="outline">Notifications</VNButton>
            </VNBadge>
            <VNBadge dot variant="success">
              <VNButton variant="outline">Online</VNButton>
            </VNBadge>
            <VNBadge :count="1000" :max="999" variant="warning">
              <VNButton variant="outline">Views</VNButton>
            </VNBadge>
          </VNFlex>

          <VNDivider />

          <VNText weight="bold" style="margin-bottom: 10px;">Avatars:</VNText>
          <VNFlex gap="15px" align="center">
            <VNAvatar text="JD" size="small" />
            <VNAvatar text="Jane Smith" size="medium" bgColor="#27ae60" />
            <VNAvatar icon="👤" size="large" bgColor="#f39c12" />
            <VNAvatar text="AB" size="xlarge" shape="square" bgColor="#e74c3c" />
          </VNFlex>
        </VNCard>

        <!-- Tags & Divider Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Tags & Divider</VNText>
          </template>

          <VNText weight="bold" style="margin-bottom: 10px;">Tags:</VNText>
          <VNFlex gap="10px" wrap="wrap" style="margin-bottom: 20px;">
            <VNTag variant="primary">Primary</VNTag>
            <VNTag variant="success">Success</VNTag>
            <VNTag variant="warning">Warning</VNTag>
            <VNTag variant="danger" :closable="true">Closable</VNTag>
            <VNTag variant="info" :bordered="true">Bordered</VNTag>
            <VNTag size="small">Small</VNTag>
            <VNTag size="large">Large</VNTag>
          </VNFlex>

          <VNDivider>Divider with text</VNDivider>

          <VNFlex gap="10px" align="center">
            <VNText>Left</VNText>
            <VNDivider orientation="vertical" />
            <VNText>Center</VNText>
            <VNDivider orientation="vertical" />
            <VNText>Right</VNText>
          </VNFlex>
        </VNCard>

        <!-- Alerts & Notifications Section -->
        <VNCard hoverable style="margin-bottom: 30px;">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Alerts & Notifications</VNText>
          </template>

          <VNText weight="bold" style="margin-bottom: 10px;">Alerts:</VNText>
          <VNAlert type="success" title="Success!" :closable="true">
            Your operation completed successfully.
          </VNAlert>
          <VNAlert type="info" title="Information" :showIcon="true">
            This is an informational message.
          </VNAlert>
          <VNAlert type="warning" title="Warning" :bordered="true">
            Please check your input before proceeding.
          </VNAlert>
          <VNAlert type="error" title="Error" :closable="true">
            Something went wrong. Please try again.
          </VNAlert>

          <VNDivider />

          <VNText weight="bold" style="margin-bottom: 10px;">Notification & Toast:</VNText>
          <VNFlex gap="10px">
            <VNButton variant="primary" @click="triggerNotification">Show Notification</VNButton>
            <VNButton variant="edit" @click="triggerToast">Show Toast</VNButton>
          </VNFlex>
        </VNCard>

        <!-- Modal Section -->
        <VNCard :hoverable="true">
          <template #header>
            <VNText tag="h2" size="large" weight="bold">Modal</VNText>
          </template>
          <VNButton variant="primary" @click="showModal = true">Open Modal</VNButton>
        </VNCard>

        <VNModal v-model="showModal" title="Example Modal" size="medium">
          <VNText>This is a modal dialog with customizable content.</VNText>
          <VNText style="margin-top: 10px;">You can add any content here including forms, images, or other components.
          </VNText>
          <template #footer>
            <VNFlex justify="flex-end" gap="10px">
              <VNButton variant="outline" @click="showModal = false">Cancel</VNButton>
              <VNButton variant="primary" @click="showModal = false">Confirm</VNButton>
            </VNFlex>
          </template>
        </VNModal>
      </VNLayoutContent>
    </VNFlex>

    <VNLayoutFooter
      style="background: #2c3e50; color: white; padding: 20px; text-align: center; flex-shrink: 0; width: 100%;">
      <VNText style="color: white;">© 2024 VNUI Component Library. Built with Vue 3 + TypeScript</VNText>
    </VNLayoutFooter>

    <!-- Notification & Toast -->
    <VNNotification v-if="showNotification" :key="notificationKey" type="success" title="Success!"
      message="Your action was completed successfully." :duration="4500" @close="showNotification = false" />
    <VNToast v-if="showToast" :key="toastKey" type="success" message="Operation completed successfully!"
      :duration="3000" position="center" @close="showToast = false" />
  </VNFlex>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>