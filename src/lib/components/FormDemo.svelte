<forge-card>
	<form>
		<forge-stack>
			<forge-stack>
				<forge-stack>
					<forge-text-field>
						<label for="input-text-01">Name</label>
						<input type="text" id="input-text-1" />
					</forge-text-field>
					<forge-stack inline stretch>
						<forge-text-field>
							<label for="input-text-2">Street</label>
							<input type="text" id="input-text-2" />
						</forge-text-field>
						<forge-text-field>
							<label for="input-text-3">State</label>
							<input type="text" id="input-text-3" />
						</forge-text-field>
					</forge-stack>
				</forge-stack>
				<forge-stack inline stretch>
					<forge-stack inline stretch>
						<forge-text-field>
							<input type="text" id="input-text-4" />
							<label for="input-text-4">Zip</label>
						</forge-text-field>
						<forge-text-field>
							<input type="text" id="input-text-5" />
							<label for="input-text-5">Email</label>
						</forge-text-field>
					</forge-stack>
					<forge-stack inline stretch>
						<forge-text-field>
							<input type="text" id="input-text-6" />
							<label for="input-text-6">Phone</label>
						</forge-text-field>
					</forge-stack>
				</forge-stack>
				<forge-stack inline stretch>
					<forge-stack>
						<forge-checkbox checked>Label</forge-checkbox>
						<forge-checkbox checked>Label</forge-checkbox>
						<forge-checkbox>Label</forge-checkbox>
					</forge-stack>
					<forge-radio-group>
						<forge-stack gap="0">
							<forge-label legend>Choose an option</forge-label>
							<forge-radio value="option1" checked>Option 1</forge-radio>
							<forge-radio value="option2">Option 2</forge-radio>
							<forge-radio value="option3">Option 3</forge-radio>
						</forge-stack>
					</forge-radio-group>
				</forge-stack>
			</forge-stack>
		</forge-stack>
	</form>
</forge-card>
