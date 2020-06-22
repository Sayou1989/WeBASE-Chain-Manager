/**
 * Copyright 2014-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
/**
 * Copyright 2014-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
package com.webank.webase.chain.mgr.base.enums;

/**
 * Enumeration of group type.
 */
public enum StartNormalStatus {
    SUCCESS(0), RUNNING(3);

    private int value;

    private StartNormalStatus(Integer groupType) {
        this.value = groupType;
    }

    public int getValue() {
        return this.value;
    }

    public static boolean isInclude(int key) {
        boolean include = false;
        for (StartNormalStatus e : StartNormalStatus.values()) {
            if (e.getValue() == key) {
                include = true;
                break;
            }
        }
        return include;
    }
}
