<script setup>
import { useNav } from '@slidev/client'
const { currentPage, total } = useNav()
</script>

<template>
  <div class="fp-footer">
    <div class="fp-brand">
      <div class="fp-logo"><span class="fp-logo-f">F</span></div>
      <span class="fp-name">FACEPrep</span>
      <span class="fp-divider">|</span>
      <span class="fp-course">Java Programming</span>
    </div>
    <div class="fp-slide-info">
      <span class="fp-module">Session 01 · Introduction to Java</span>
    </div>
    <div class="fp-page">
      <span class="fp-page-num">{{ currentPage }}</span>
      <span class="fp-page-sep">/</span>
      <span class="fp-page-total">{{ total }}</span>
    </div>
  </div>
</template>

<style scoped>
.fp-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 38px;
  background: #0f172a;
  border-top: 2px solid #ff5900;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 100;
  font-family: 'Inter', system-ui, sans-serif;
}

.fp-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.fp-logo {
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #ff5900, #ff8c42);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fp-logo-f {
  color: white;
  font-weight: 900;
  font-size: 0.75rem;
  line-height: 1;
}

.fp-name {
  color: #ff5900;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.02em;
}

.fp-divider {
  color: #334155;
  font-size: 0.75rem;
}

.fp-course {
  color: #64748b;
  font-size: 0.75rem;
}

.fp-slide-info {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.fp-module {
  color: #475569;
  font-size: 0.75rem;
  font-weight: 500;
}

.fp-page {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.fp-page-num {
  color: #ff5900;
  font-weight: 700;
  font-size: 0.85rem;
}

.fp-page-sep {
  color: #334155;
  font-size: 0.75rem;
}

.fp-page-total {
  color: #475569;
  font-size: 0.8rem;
}
</style>
