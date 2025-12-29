import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
	{
		name: 'app/files-to-lint',
		files: ['**/*.{vue,ts,mts,tsx}'],
	},

	globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

	...pluginVue.configs['flat/essential'],

	vueTsConfigs.recommended,

	{
		...pluginVitest.configs.recommended,
		files: ['src/**/__tests__/*'],
	},

	skipFormatting,

	{
		rules: {
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],

			eqeqeq: ['error', 'always'],
			'vue/no-unused-components': 'warn',
			'vue/multi-word-component-names': 'off',
		},
	},
)
