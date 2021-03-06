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
package com.webank.webase.chain.mgr.front;

import com.webank.webase.chain.mgr.front.entity.FrontParam;
import com.webank.webase.chain.mgr.front.entity.TbFront;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FrontMapper {

    int add(TbFront tbFront);

    Integer getCount(FrontParam param);

    List<TbFront> getList(FrontParam param);

    TbFront getById(@Param("frontId") int frontId);

    TbFront getByChainIdAndNodeId(@Param("chainId") int chainId, @Param("nodeId") String nodeId);

    int removeById(@Param("frontId") int frontId);

    int removeByChainId(@Param("chainId") int chainId);
}
